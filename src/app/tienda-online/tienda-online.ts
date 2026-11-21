import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  imports: [],
  selector: 'app-tienda-online',
  styleUrl: './tienda-online.css',
  templateUrl: './tienda-online.html',
})
export class TiendaOnline {
  agregarProducto($event: Event, descripcionInput: string, precioInput: string) {
    $event.preventDefault();

    if (descripcionInput.trim() === '' || precioInput.trim() === '') {
      return;
    }

    const nuevoProducto = new Producto(descripcionInput, Number(precioInput));
    this.productos.push(nuevoProducto);
  }
  productos: Array<Producto> = [new Producto("Muebles", 100), new Producto("Carne", 50)];
}
