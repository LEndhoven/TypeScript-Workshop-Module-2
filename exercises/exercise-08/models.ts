export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export interface Shift {
  id: string;
  employeeId: string;
  start: Date;
  end: Date;
}
