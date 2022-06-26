import { Component, OnInit } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listaparticipantes-component',
  templateUrl: './listaparticipantes-component.component.html',
  styleUrls: ['./listaparticipantes-component.component.scss']
})
export class ListaparticipantesComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fatrash = faTrash;
  fapentosquare = faPenToSquare
}
