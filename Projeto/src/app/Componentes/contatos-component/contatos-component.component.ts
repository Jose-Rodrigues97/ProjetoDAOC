import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contatos-component',
  templateUrl: './contatos-component.component.html',
  styleUrls: ['./contatos-component.component.scss']
})
export class ContatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faCoffee = faCoffee;
}
