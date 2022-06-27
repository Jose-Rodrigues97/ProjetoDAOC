import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroestabelecimentoComponentComponent } from './cadastroestabelecimento-component.component';

describe('CadastroestabelecimentoComponentComponent', () => {
  let component: CadastroestabelecimentoComponentComponent;
  let fixture: ComponentFixture<CadastroestabelecimentoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroestabelecimentoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroestabelecimentoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
