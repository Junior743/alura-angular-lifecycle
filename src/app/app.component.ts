import { Component, DoCheck, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from './interfaces/Item';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaCompras!: Array<Item>;
  itemParaSerEditado!: Item;
  faTrash = faTrash;

  constructor(private listaDeCompraService: ListaDeCompraService) {}

  ngOnInit(): void {
    this.listaCompras = this.listaDeCompraService.getListaDeCompra();
  }

  ngDoCheck(): void {
    this.listaDeCompraService.atualizarLocalStorage();
  }

  atualizarListaCompras() {
    this.listaCompras = this.listaDeCompraService.getListaDeCompra();
  }

  deletarItem(itemId: number) {
    this.listaDeCompraService.deletarItemDaLista(itemId);
    this.atualizarListaCompras();
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = { ...item };
  }

  limparLista() {
    this.listaDeCompraService.limparLista();
    this.atualizarListaCompras();
  }
}
