import { User } from '../../shared/interfaces/users';
import { Travel } from 'src/app/shared/interfaces/travels';
export function SortUser(array: User[]): User[] {
  return array.sort((a, b) => {
    let x = a.fullName.toLowerCase(),
      y = b.fullName.toLowerCase();
    return x == y ? 0 : x > y ? 1 : -1;
  });
}

export function SortTravel(array: Travel[]): Travel[] {
  return array.sort((a, b) => {
    return a.lastStatusTravel - b.lastStatusTravel;
  });
}
