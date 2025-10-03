import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/Item';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaCompras!: Array<Item>;
  itemParaSerEditado!: Item;

  constructor(private listaDeCompraService: ListaDeCompraService) {}

  ngOnInit(): void {
    this.listaCompras = this.listaDeCompraService.getListaDeCompra();
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = { ...item };
  }
}
