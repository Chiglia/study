import type { QuizLibrary } from './quiz.models';

export const LOCAL_STORAGE_QUOTA_BYTES = 5 * 1024 * 1024;
export const QUESTIONS_PER_ESTIMATED_TEST = 50;
const DEFAULT_QUESTION_BYTES = 350;

export interface StorageEstimate {
  usedBytes: number;
  remainingBytes: number;
  estimatedTests: number;
  percentUsed: number;
}

function serializedBytes(value: string): number {
  return value.length * 2;
}

function localStorageBytes(): number {
  let bytes = 0;
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (key !== null) bytes += serializedBytes(key + (localStorage.getItem(key) ?? ''));
  }
  return bytes;
}

export function estimateStorage(library: QuizLibrary): StorageEstimate {
  const questions = library.collections.flatMap(collection => collection.questions);
  const questionBytes = questions.length
    ? questions.reduce((total, question) => total + serializedBytes(JSON.stringify(question)), 0)
      / questions.length
    : DEFAULT_QUESTION_BYTES;
  const estimatedTestBytes = Math.max(DEFAULT_QUESTION_BYTES, questionBytes)
    * QUESTIONS_PER_ESTIMATED_TEST;
  const usedBytes = localStorageBytes();
  const remainingBytes = Math.max(0, LOCAL_STORAGE_QUOTA_BYTES - usedBytes);
  return {
    usedBytes,
    remainingBytes,
    estimatedTests: Math.floor(remainingBytes / estimatedTestBytes),
    percentUsed: Math.min(100, usedBytes / LOCAL_STORAGE_QUOTA_BYTES * 100),
  };
}
