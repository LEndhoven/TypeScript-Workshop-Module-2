import { RegisteredVehicle, Vehicle } from "./models";

export const UNREGISTERED_VEHICLES: Vehicle[] = [
  { id: '123', brand: 'BMW' },
  { id: '456', brand: 'Audi' },
  { id: '789', brand: 'Mercedes' },
  { id: '101', brand: 'Volkswagen' },
  { id: '102', brand: 'Ford' },
  { id: '103', brand: 'Toyota' },
  { id: '104', brand: 'Nissan' },
]

export const REGISTERED_VEHICLES: RegisteredVehicle[] = [
  { id: '201', brand: 'BMW', owner: { id: '1', name: 'John Doe' } },
  { id: '202', brand: 'Audi', owner: { id: '2', name: 'Jane Doe' } },
  { id: '203', brand: 'Mercedes', owner: { id: '3', name: 'Alice' } },
  { id: '204', brand: 'Volkswagen', owner: { id: '4', name: 'Bob' } },
  { id: '205', brand: 'Ford', owner: { id: '1', name: 'John Doe' } },
  { id: '206', brand: 'Toyota', owner: { id: '6', name: 'David' } },
  { id: '207', brand: 'Nissan', owner: { id: '4', name: 'Bob' } },
];
