import { Vehicle } from './vehicle';
import { Rol } from './rol';
export interface Cadete {
  id: number;
  email: string;
  fullName: string;
  address: string;
  cellPhone: string;
  isAccepted: boolean;
  isDeleted: boolean;
  observations: string;
  password: string;
  vehicle: Vehicle;
  rol: Rol;
}
