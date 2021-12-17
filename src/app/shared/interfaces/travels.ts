import { Dto } from './dto';
export interface Travel {
  id: number;
  creationDate: string;
  lastStatusTravel: number;
  travelEquipmentDTOs: Dto[];
}
