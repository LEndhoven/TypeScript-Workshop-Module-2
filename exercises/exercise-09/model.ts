export interface Shift {
  id?: string;
  start: Date;
  end: Date;
  employeeId?: string;
  breakWindows?: { start: { hourOfDay: number }; end: {hourOfDay: number} }[];
}
