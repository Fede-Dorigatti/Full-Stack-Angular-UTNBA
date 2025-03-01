import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar',
})
export class OcultarPipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    let caracter = '*';
    if (args[0]) {
      caracter = args[0];
    }
    return `${value[0]}${caracter}${caracter}${caracter}`;
  }
}
