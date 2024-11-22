export enum VehicleType {
  Car = 'Car',
  Truck = 'Truck',
  Motorcycle = 'Motorcycle'
}

export interface VehicleBase {
  id: string;
  brand: string;
  buildYear: number;
}

export interface Car extends VehicleBase {
  type: VehicleType.Car;
  numberOfDoors: number;
  isInsured: boolean;
}

export interface Truck extends VehicleBase {
  type: VehicleType.Truck;
  capacity: number;
  isInsured: boolean;
}

export interface Motorcycle extends VehicleBase {
  type: VehicleType.Motorcycle;
  topSpeed: number;
}

export type Vehicle = Car | Truck | Motorcycle;
