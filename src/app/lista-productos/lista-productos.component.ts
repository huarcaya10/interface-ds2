import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  suelos = {
    Nombre:"lamina-3d",
    name:"laminasmaderas",
    Estilo:"Pisos",
    Producto:"Suelas para piso liso",
    Precio:45.00,
    Imagen:"assets/lamina.jpg",
  }
  parquet={
    Nombre:"parquetpisos",
    name:"parqueton",
    Estilo:"Parquett",
    Producto:"Juego de parqueton para sala y covertiza",
    Precio:400.00,
    Imagen:"assets/parquet.jpg",
  }
  sala={
    Nombre:"Juego de sala",
    name:"sala",
    Estilo:"Salar-Comedor",
    Producto:"Juego de Sala comedor acabado matine",
    Precio:1200.00,
    Imagen:"assets/juegosala.jpg",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
