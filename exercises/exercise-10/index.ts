import { logError, logText } from "../../lib/log-utils";
import { Shift } from "./model";

/**
 * Exercise 10
 *
 * For some testing functionality, we need to create a mock object of a `Shift`.
 * We have already defined a type `ShiftWithAllProperties` that requires all properties of a `Shift` to be present.
 *
 * The function `mockShiftWithAllProperties` creates a mock object of a `Shift` with all properties set.
 * It has also an option to override some of the default properties.
 *
 * As you can see from the three mocks below, it is not clear which properties are being overridden.
 * And overriding the `start` property is cumbersome, since also a value for the `id` should be provided.
 *
 * Your job is to improve the `mockShiftWithAllProperties` function such that it becomes easier to use and clearer which properties are being overridden.
 */

type ShiftWithAllProperties = Required<Shift>;


// Can you improve the definition of the `mockShiftWithAllProperties` function such that it becomes easier to use and clearer which properties are being overridden?
// You are allowed to change the types of the function parameters if necessary.
// When you do, make sure to also update the creation of the mock objects below.
// Hint: Try to use only one function parameter
// Hint2: Use the `Partial` utility type of TypeScript
// Hint3: Try using the spread operator (...) for a cleaner and more readable implementation
//        Note that using the spread operator is not a strict condition in order to make the code compile. It is just a suggestion to make the code more readable.
function mockShiftWithAllProperties(id?: string, start?: Date, end?: Date): ShiftWithAllProperties {
  return {
    id: id || '123',
    start: start || new Date('2023-01-01T08:00:00'),
    end: end || new Date('2023-01-01T16:00:00'),
    overtimeAllowed: true,
    employeeId: '456',
    breakWindows: [
      { start: { hourOfDay: 12 }, end: { hourOfDay: 13 } }
    ],
    requiredSkills: ['skill1', 'skill2'],
    startLocation: {
      latitude: 12.34,
      longitude: 56.78
    }
  }
}

const mock1 = mockShiftWithAllProperties();
const mock2 = mockShiftWithAllProperties('789');
const endDate = new Date('2023-01-01T10:00:00');
const mock3 = mockShiftWithAllProperties(undefined, undefined, endDate);


//--------- Verifying the mock objects ----------

// This is the default mock object
verify(mock1, 'id', '123');

// This is the mock object with an overridden `id` property
verify(mock2, 'id', '789');

// This is the mock object with overridden `end` property.
verify(mock3, 'end', endDate);

// This function verifies if the given property of the `Shift` object has the expected value.
// it is a utility function for the mock object verification and not an active part of the exercise
function verify<TKey extends keyof ShiftWithAllProperties>(shift: ShiftWithAllProperties, key: TKey, expectedValue: ShiftWithAllProperties[TKey]): void {
  const actualValue = shift[key];
  const correctValue = actualValue === expectedValue;
  const logFn = correctValue ? logText : logError;
  logFn(`The mock object has ${key} with value ${actualValue}. This is the ${correctValue ? 'correct' : 'wrong'} value.`);
}
