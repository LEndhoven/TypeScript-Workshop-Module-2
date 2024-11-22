import { Employee, Shift } from "./models"

const employee1: Employee = {
  id: '1',
  name: 'John Doe'
}

const employee2: Employee = {
  id: '2',
  name: 'Jane Doe'
}

export const EMPLOYEES = [employee1, employee2];
export const SHIFT: Shift = {
  id: '1',
  employee: employee1,
  start: new Date(),
  end: new Date()
}
