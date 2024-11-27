import { logError, logText } from '../../lib/log-utils';
import { CHECKED_REALIZED_ORDER, REALIZED_ORDER } from './models';

/**
 * Exercise 13 - Mapped Types
 *
 * In this exercise we want to cover a system in which all data is checked before it is fully processed. We also want to keep track of each
 * data entity that has been checked. For this we want to create a Mapped type "CheckedEntity" that takes a type and creates a new type with
 * all of the properties of the original type, but with all properties getting the prefix "checked", followed by a capital
 * letter of the original property name, and each property being of type boolean.
 *
 * For example:
 * - orderNumber: string; becomes checkedOrderNumber: boolean;
 *
 * Create a new type CheckedEntity that fulfills the requirements above and can be applied to any entity.
 * For this exercise you can assume that the entity does not contain nested properties.
 */

// EXERCISE: Follow the instructions in the description above and write code directly below this
type CheckedEntity<TEntity> = {
  [Property in keyof TEntity as `checked${Capitalize<string & Property>}`]: boolean;
};


// SOLUTION-CHECKER: Code below is to check your solution
function isFullyChecked<TEntity extends object>(entity: TEntity, checkedEntity: CheckedEntity<TEntity>): boolean {
  const checkedEntityKeys = Object.keys(checkedEntity) as (keyof CheckedEntity<TEntity>)[];
  for (const key of checkedEntityKeys) {
    if (checkedEntity[key] !== true) {
      logError(`Property ${String(key)} is not checked`);

      return false;
    }
  }

  logText('All properties are checked and OK!');

  return true;
}

const isChecked = isFullyChecked(REALIZED_ORDER, CHECKED_REALIZED_ORDER);
