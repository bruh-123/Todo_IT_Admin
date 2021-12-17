import { Rol } from './rol';
import { Vehicle } from './vehicle';

export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  address: string;
  cellPhone: string;
  isAccepted: boolean;
  isDeleted: boolean;
  observations: string;
  vehicle: Vehicle|null;
  rol: Rol;
}
