import { Rol } from './rol';

export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  address: string;
  cellPhone: string;
  isAccepted: boolean;
  isDeleted: boolean;
  observations?: string;
  vehicle: string;
  rol: Rol;
}
