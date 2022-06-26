import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaparticipantesComponentComponent } from './listaparticipantes-component.component';

describe('ListaparticipantesComponentComponent', () => {
  let component: ListaparticipantesComponentComponent;
  let fixture: ComponentFixture<ListaparticipantesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaparticipantesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaparticipantesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
