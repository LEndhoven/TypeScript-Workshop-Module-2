import { logError, logText } from '../../lib/log-utils';

import { Questionnaire, QUESTIONNAIRE_1, QUESTIONNAIRE_2, verifyConversion } from './models';
/**
 * Exercise 14 - Infer
 *
 * Someone decided to create a very small questionnaire for employees. Only 2 questions are asked, but the questions are chosen from a list
 * of questions of different types. The answer could be a string, number, Date, etc.
 * The Questionnaire<TQuestion1, TQuestion2> interface contains two properties:
 * - answer1: TQuestion1
 * - answer2: TQuestion2
 *
 * The processing system needs to convert the questionnaire to a tuple of the answers to simplify the processing.
 *
 * It is your task to create a type TupleOf that only accepts an object matching Questionnaire and returns a tuple with the types of the
 * two answerX properties.
 */

// EXERCISE: Follow the instructions in the description above and write code directly below this
type TupleOf<TObject> = ; // ?



// SOLUTION-CHECKER: Code below is to check your solution
function convertToTuple<TQuestion1, TQuestion2>(
  questionnaire: Questionnaire<TQuestion1, TQuestion2>,
): TupleOf<Questionnaire<TQuestion1, TQuestion2>> {
  return [questionnaire.answer1, questionnaire.answer2];
}

function convertToTupleError<TObject extends object>(inputObject: TObject): TupleOf<TObject> {
  if ('answer1' in inputObject && 'answer2' in inputObject) {
    return [inputObject.answer1, inputObject.answer2] as TupleOf<TObject>;
  } else {
    throw new Error('Invalid object');
  }
}

function verify(): void {
  const tuple1 = convertToTuple(QUESTIONNAIRE_1);
  if (verifyConversion(QUESTIONNAIRE_1, tuple1)) {
    logText('Conversion 1 correct');
  } else {
    logError('Conversion 1 incorrect');
  }

  const tuple2 = convertToTuple(QUESTIONNAIRE_2);
  if (verifyConversion(QUESTIONNAIRE_2, tuple2)) {
    logText('Conversion 2 correct');
  } else {
    logError('Conversion 2 incorrect');
  }

  const invalidObject = { test: 'abc' };
  try {
    convertToTupleError(invalidObject);
  } catch(error) {
    logText('Error thrown correctly');
  }
}

verify();
