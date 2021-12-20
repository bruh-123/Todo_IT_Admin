import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'estado' })
export class EstadoPipe implements PipeTransform {
  transform(estado: number): string {
    switch (estado.toString()) {
      case '1':
        return 'A retirar(1)';
      case '2':
        return 'Retiro Asignado(2)';
      case '3':
        return 'Retirado(3)';
      case '4':
        return 'A Reparar(4)';
      case '5':
        return 'Reparado(5)';
      case '6':
        return 'Entrega Asignada(6)';
      case '7':
        return 'A Entregar(7)';
      case '8':
        return 'Entrega a confirmar(8)';
      case '9':
        return 'Entregado(9)';
      default:
        return '-';
    }
  }
}
