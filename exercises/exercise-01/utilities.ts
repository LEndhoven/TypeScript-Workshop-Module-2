import { logText } from "../../lib/log-utils";
import { Vehicle } from "./models";

export function registerVehicle(vehicle: Vehicle): void {
  logText(`Registering vehicle with id ${vehicle.id}. Brand: ${vehicle.brand.toUpperCase()}` );
}

export function getFuelPrice(fuelType: string): number {
  return fuelType === 'diesel' ? 1.2 : 1.5;
}
