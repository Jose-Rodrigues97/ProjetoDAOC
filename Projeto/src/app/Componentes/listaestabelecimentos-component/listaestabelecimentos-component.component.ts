import { Component, OnInit } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-listaestabelecimentos-component',
  templateUrl: './listaestabelecimentos-component.component.html',
  styleUrls: ['./listaestabelecimentos-component.component.scss']
})
export class ListaestabelecimentosComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fatrash = faTrash;
  fapentosquare = faPenToSquare;
}
