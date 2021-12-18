import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'estado' })
export class EstadoPipe implements PipeTransform {
  transform(estado: number): string {
    switch (estado.toString()) {
      case '1':
        return 'A retirar';
      case '2':
        return 'Retiro Asignado';
      case '3':
        return 'Retirado';
      case '4':
        return 'A Reparar';
      case '5':
        return 'Reparado';
      case '6':
        return 'Entrega Asignada';
      case '7':
        return 'A Entregar';
      case '8':
        return 'Entrega a confirmar';
      case '9':
        return 'Entregado';
      default:
        return '-';
    }
  }
}
