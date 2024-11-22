export interface Vehicle {
  id: string;
  brand: string;
}

export interface VehicleOwner {
  id: string;
  name: string;
}

export interface RegisteredVehicle extends Vehicle {
  owner: { id: string; name: string};
}
