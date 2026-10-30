import { Question } from '../types';
import { QUESTIONS_1_TO_9 } from './questions/subtopic1_3';
import { QUESTIONS_10_TO_18 } from './questions/subtopic4_6';
import { QUESTIONS_19_TO_30 } from './questions/subtopic7_11';

export const ALL_QUESTIONS: Question[] = [
  ...QUESTIONS_1_TO_9,
  ...QUESTIONS_10_TO_18,
  ...QUESTIONS_19_TO_30,
];

export function getQuestionById(id: number): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id);
}

export function getQuestionsBySubtopic(subtopicId: number): Question[] {
  return ALL_QUESTIONS.filter((q) => q.subtopicId === subtopicId);
}
