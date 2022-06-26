import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaestabelecimentosComponentComponent } from './listaestabelecimentos-component.component';

describe('ListaestabelecimentosComponentComponent', () => {
  let component: ListaestabelecimentosComponentComponent;
  let fixture: ComponentFixture<ListaestabelecimentosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaestabelecimentosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaestabelecimentosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
