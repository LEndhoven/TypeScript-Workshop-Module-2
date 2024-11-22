export interface Shift {
  id?: string;
  start: Date;
  end: Date;
  overtimeAllowed: boolean;
  employeeId?: string;
  breakWindows?: { start: { hourOfDay: number }; end: {hourOfDay: number} }[];
  requiredSkills?: string[];
  startLocation?: {
    latitude: number;
    longitude: number;
  }
}
