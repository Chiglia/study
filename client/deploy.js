import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';

function _exec(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout) => {
      if (error) {
        reject(error);
      }
      resolve(stdout);
    });
  });
}

(async function () {
  try {
    const currentDir = process.cwd();
    console.log('Current directory:', currentDir);

    console.log('Building project...');
    await _exec('ng build --output-path docs --base-href /');
    console.log('Built, ready to deploy');
    fs.copyFileSync('docs/browser/index.html', 'docs/browser/404.html');
    if (fs.existsSync('CNAME')) {
      fs.copyFileSync('CNAME', 'docs/browser/CNAME');
    }
    console.log('Files copied');
    const targetDocsDir = path.join(currentDir, '..', 'docs');
    if (fs.existsSync(targetDocsDir)) {
      fs.rmSync(targetDocsDir, { recursive: true, force: true });
    }
    console.log('Removed old deployment');
    fs.cpSync('docs/browser', targetDocsDir, {
      recursive: true,
    });
    console.log('Successfully moved new deployment to root');
  } catch (err) {
    console.error('Errore durante il deploy:', err);
    process.exit(1);
  }
})();
