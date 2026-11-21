import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TiendaOnline } from './tienda-online/tienda-online';

@Component({
  imports: [TiendaOnline],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo = "Tienda Online";
  subtitulo = "Listado de productos";
}
