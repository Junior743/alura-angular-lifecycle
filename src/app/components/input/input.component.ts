import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Item } from '../../interfaces/Item';
import { ListaDeCompraService } from '../../service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() itemQueVaiSerEditado!: Item;

  editando = false;
  nomeItem!: string;
  textoEdicao = 'Salvar item';

  constructor(private listaDeCompraService: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.changeEditingState();
      this.nomeItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  changeEditingState() {
    const isEditing = !!this.itemQueVaiSerEditado;
    this.editando = isEditing;
    this.textoEdicao = isEditing ? 'Atualizar item' : 'Salvar item';
  }

  limparCampo() {
    this.nomeItem = '';
    this.itemQueVaiSerEditado = null!;

    this.changeEditingState();
  }

  adicionarItem() {
    this.listaDeCompraService.adicionarItemNaLista(this.nomeItem);
    this.limparCampo();
  }

  editarItem() {
    if (this.itemQueVaiSerEditado) {
      this.listaDeCompraService.editarItemNaLista(
        this.itemQueVaiSerEditado,
        this.nomeItem,
      );
    }
    this.limparCampo();
  }
}
