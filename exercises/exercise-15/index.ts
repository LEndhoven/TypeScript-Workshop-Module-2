import { logText } from '../../lib/log-utils';

import { Trainer, Rating, bestRating, bestRating2 } from './models';

/**
 * Exercise 15 - Template Literal Types
 *
 * Now that the workshop is nearing its end, it is time to rate the trainers. For this we have provided a list of the trainers, and all the
 * possible ratings that you could need to rate us.
 * The trainers are stored in the TRAINERS array, and the ratings are stored in the RATINGS array.
 *
 * It is now your goal to create a type TrainerRating that is a template literal type that combines a Trainer and a Rating, by using the
 * template: Trainer - Rating.
 * For example: 'Gert Jan - Excellent'
 *
 * Note that you should not create hard-coded union of all values, as trainers may change, and even higher ratings might become available.
 * Make sure it is flexible and all possible combinations are automatically created with your type.
 */

// EXERCISE: Follow the instructions in the description above and write code directly below this
type TrainerRating = `${Trainer} - ${Rating}`;


// SOLUTION-CHECKER: Code below is to check your solution
function rateTrainer(trainer: Trainer, rating: Rating): TrainerRating {
  return `${trainer} - ${rating}`;
}

const gertJanRating = rateTrainer('Gert Jan', 'Excellent');
const leonRating = rateTrainer('Leon', 'Excellent');

function checkRating(trainerRating: TrainerRating): void {
  logText(`Rating: ${trainerRating.toUpperCase()}`);
}

function verify(): void {
  checkRating(gertJanRating);
  checkRating(leonRating);
  checkRating(bestRating);
  checkRating(bestRating2);
}

verify();
