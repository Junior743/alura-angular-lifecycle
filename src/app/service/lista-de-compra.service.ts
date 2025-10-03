import { Injectable } from '@angular/core';
import { Item } from './../interfaces/Item';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra =
      JSON.parse(localStorage.getItem('listaDeCompra')!) || [];
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string): Item {
    return {
      id: this.listaDeCompra.length + 1,
      nome: nomeDoItem,
      data: new Date().toLocaleString(),
      comprado: false,
    };
  }

  adicionarItemNaLista(nomeDoItem: string): void {
    const novoItem = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(novoItem);

    // this.atualizarLocalStorage(); // Atualiza o localStorage no DoCheck do AppComponent
  }

  editarItemNaLista(itemAntigo: Item, nomeEditadoDoItem: string): void {
    const index = this.listaDeCompra.findIndex(
      (item) => item.id === itemAntigo.id,
    );

    if (index !== -1) this.listaDeCompra[index].nome = nomeEditadoDoItem;

    // this.atualizarLocalStorage(); // Atualiza o localStorage no DoCheck do AppComponent
  }

  atualizarLocalStorage() {
    localStorage.setItem('listaDeCompra', JSON.stringify(this.listaDeCompra));
  }
}
