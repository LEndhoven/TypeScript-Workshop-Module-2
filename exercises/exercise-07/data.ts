import { Person, Shift } from "./models";

export const PERSONS: Person[] = [
  { firstName: 'John', lastName: 'Smith', age: 30 },
  { firstName: 'Emily', lastName: 'Johnson', age: 25 },
  { firstName: 'Michael', lastName: 'Brown', age: 40 },
  { firstName: 'Sarah', lastName: 'Davis', age: 35 },
  { firstName: 'David', lastName: 'Wilson', age: 45 },
  { firstName: 'Jessica', lastName: 'Moore', age: 28 },
  { firstName: 'Daniel', lastName: 'Taylor', age: 38 },
  { firstName: 'Laura', lastName: 'Anderson', age: 27 },
  { firstName: 'James', lastName: 'Thomas', age: 50 },
];

export const SHIFTS: Shift[] = [
  { id: '1', employeeId: '1', start: new Date('2023-01-01T08:00:00'), end: new Date('2023-01-01T16:00:00') },
  { id: '2', employeeId: '2', start: new Date('2023-01-01T08:00:00'), end: new Date('2023-01-01T16:00:00') },
  { id: '3', employeeId: '3', start: new Date('2023-01-03T08:00:00'), end: new Date('2023-01-03T16:00:00') },
  { id: '4', employeeId: '4', start: new Date('2023-01-04T08:00:00'), end: new Date('2023-01-04T16:00:00') },
  { id: '5', employeeId: '5', start: new Date('2023-01-05T08:00:00'), end: new Date('2023-01-05T16:00:00') },
  { id: '6', employeeId: '6', start: new Date('2023-01-06T08:00:00'), end: new Date('2023-01-06T16:00:00') },
  { id: '7', employeeId: '7', start: new Date('2023-01-07T08:00:00'), end: new Date('2023-01-07T16:00:00') },
  { id: '8', employeeId: '8', start: new Date('2023-01-08T08:00:00'), end: new Date('2023-01-08T16:00:00') },
  { id: '9', employeeId: '9', start: new Date('2023-01-09T08:00:00'), end: new Date('2023-01-09T16:00:00') },
  { id: '10', employeeId: '10', start: new Date('2023-01-10T08:00:00'), end: new Date('2023-01-10T16:00:00') },
  { id: '11', employeeId: '8', start: new Date('2023-01-11T08:00:00'), end: new Date('2023-01-11T16:00:00') },
  { id: '12', employeeId: '12', start: new Date('2023-01-12T08:00:00'), end: new Date('2023-01-12T16:00:00') },
  { id: '13', employeeId: '13', start: new Date('2023-01-13T08:00:00'), end: new Date('2023-01-13T16:00:00') },
  { id: '14', employeeId: '14', start: new Date('2023-01-14T08:00:00'), end: new Date('2023-01-14T16:00:00') },
  { id: '15', employeeId: '5', start: new Date('2023-01-15T08:00:00'), end: new Date('2023-01-15T16:00:00') },
];
