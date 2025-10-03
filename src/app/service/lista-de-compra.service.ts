import { Injectable } from '@angular/core';
import { Item } from './../interfaces/Item';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [
    {
      id: 1,
      nome: 'Queijo prato',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 2,
      nome: 'Leite integral',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 3,
      nome: 'Mamão papaia',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: true,
    },
  ];

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
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
  }

  editarItemNaLista(itemAntigo: Item, nomeEditadoDoItem: string): void {
    const index = this.listaDeCompra.findIndex(
      (item) => item.id === itemAntigo.id,
    );

    if (index !== -1) this.listaDeCompra[index].nome = nomeEditadoDoItem;
  }
}
