import type { PdfLine } from './pdf-test-parser.ts';

interface Fragment {
  text: string;
  x: number;
  y: number;
  width: number;
  font: string;
}

function boldFont(value: unknown): boolean {
  if (typeof value !== 'object' || value === null || !('name' in value)) return false;
  return typeof value.name === 'string' && /bold|black|heavy|demi/i.test(value.name);
}

export async function readPdfLines(data: Uint8Array, baseURI?: string): Promise<PdfLine[]> {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  if (baseURI) pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdf.worker.min.mjs', baseURI).href;
  const task = pdfjs.getDocument({
    data, fontExtraProperties: true, useSystemFonts: true,
    ...(baseURI ? { standardFontDataUrl: new URL('pdf-standard-fonts/', baseURI).href } : {}),
  });
  try {
    const document = await task.promise;
    const result: PdfLine[] = [];
    for (let index = 1; index <= document.numPages; index++) {
      const page = await document.getPage(index);
      const content = await page.getTextContent();
      await page.getOperatorList();
      const fragments: Fragment[] = content.items.flatMap(item => {
        if (!('str' in item) || !item.str.trim()) return [];
        return [{ text: item.str, x: item.transform[4], y: item.transform[5],
          width: item.width, font: item.fontName }];
      }).sort((a, b) => b.y - a.y || a.x - b.x);
      const rows: Fragment[][] = [];
      for (const fragment of fragments) {
        const row = rows.at(-1);
        if (row && Math.abs(row[0].y - fragment.y) < 2) row.push(fragment);
        else rows.push([fragment]);
      }
      for (const row of rows) {
        row.sort((a, b) => a.x - b.x);
        if (row.length === 1 && /^\d+$/.test(row[0].text.trim())
          && row[0].y < page.view[3] * 0.08) continue;
        let text = '';
        const bold: boolean[] = [];
        let end = row[0].x;
        for (const fragment of row) {
          if (text && fragment.x - end > 1.5 && !text.endsWith(' ') && !fragment.text.startsWith(' ')) {
            text += ' ';
            bold.push(false);
          }
          text += fragment.text;
          const isBold = boldFont(page.commonObjs.get(fragment.font));
          for (let i = 0; i < fragment.text.length; i++) bold.push(isBold);
          end = fragment.x + fragment.width;
        }
        const leading = text.length - text.trimStart().length;
        result.push({ text: text.trim(), x: row[0].x, bold: bold.slice(leading, leading + text.trim().length) });
      }
    }
    return result;
  } finally {
    await task.destroy();
  }
}
