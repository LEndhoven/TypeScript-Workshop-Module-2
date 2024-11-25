export interface Vehicle {
  id: string;
  brand: string;
}

interface VehicleOwner {
  id: string;
  name: string;
}

export interface RegisteredVehicle extends Vehicle {
  owner: VehicleOwner;
}
