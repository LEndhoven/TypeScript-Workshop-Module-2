export interface Employee {
  id: string;
  name: string;
}

export interface Shift {
  id: string;
  employee: Employee;
  start: Date;
  end: Date;
}
