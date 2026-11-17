import { TranslocoService } from '@jsverse/transloco';

const errorKeys: Record<string, string> = {
  'La raccolta dei test salvata non è valida.': 'errors.collectionInvalid',
  'Un test salvato non è valido.': 'errors.savedTestInvalid',
  'La data di modifica del test non è valida.': 'errors.modifiedDateInvalid',
  'Esiste già un test con questo nome.': 'errors.duplicateTestName',
  'Il test selezionato non esiste.': 'errors.testMissing',
  'Il test non esiste.': 'errors.testNotFound',
  'Inserisci un nome da 1 a 100 caratteri.': 'errors.testNameLength',
  'Aggiungi almeno una domanda per iniziare.': 'errors.questionRequired',
  'Risposta non valida.': 'errors.invalidAnswer',
  'Hai gia risposto a questa domanda.': 'errors.alreadyAnswered',
  'Hai già risposto a questa domanda.': 'errors.alreadyAnswered',
  'Il test e gia terminato.': 'errors.testFinished',
  'Il test è già terminato.': 'errors.testFinished',
  'I dati salvati non sono validi. Ripristina i dati per utilizzare l’app.': 'errors.savedDataInvalid',
  'Il nome del file PDF non è valido.': 'errors.fileNameInvalid',
  'Il PDF non contiene domande numerate riconoscibili.': 'errors.pdfQuestionsMissing',
  'Il file deve contenere un nome da 1 a 100 caratteri.': 'errors.fileNameRequired',
  'Il file deve contenere almeno una domanda.': 'errors.fileQuestionsRequired',
  'Impossibile importare il test.': 'errors.importTest',
  'Catalogo non disponibile.': 'errors.catalogUnavailable',
};

export function translateError(error: unknown, transloco: TranslocoService): string {
  if (!(error instanceof Error)) return transloco.translate('errors.unexpected');
  const pageSize = /^Scegli tutte le domande o un numero da 1 a (\d+)\.$/.exec(error.message);
  if (pageSize) return transloco.translate('errors.pageSize', { max: pageSize[1] });
  const pdfQuestions = /^Nessuna domanda importabile: (\d+) escluse\./.exec(error.message);
  if (pdfQuestions) return transloco.translate('errors.pdfNoQuestions', { count: pdfQuestions[1] });
  const key = errorKeys[error.message];
  return key ? transloco.translate(key) : error.message;
}
