import { Component, OnInit } from '@angular/core';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-listanecessitados-component',
  templateUrl: './listanecessitados-component.component.html',
  styleUrls: ['./listanecessitados-component.component.scss']
})
export class ListanecessitadosComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fatrash = faTrash;
  fapentosquare = faPenToSquare
}
