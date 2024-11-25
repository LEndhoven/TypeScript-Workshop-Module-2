export interface Questionnaire<TAnswer1, TAnswer2> {
  answer1: TAnswer1;
  answer2: TAnswer2;
}

export const QUESTIONNAIRE_1 = {
  answer1: 'I have no name',
  answer2: 1,
} satisfies Questionnaire<string, number>;

export const QUESTIONNAIRE_2 = {
  answer1: 'Green',
  answer2: true,
} satisfies Questionnaire<string, boolean>;

export function verifyConversion<TAnswer1, TAnswer2>(
  question: Questionnaire<TAnswer1, TAnswer2>,
  tuple: [TAnswer1, TAnswer2],
): boolean {
  return question.answer1 === tuple[0] && question.answer2 === tuple[1];
}
