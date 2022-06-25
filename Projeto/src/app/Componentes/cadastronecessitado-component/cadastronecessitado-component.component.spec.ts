import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastronecessitadoComponentComponent } from './cadastronecessitado-component.component';

describe('CadastronecessitadoComponentComponent', () => {
  let component: CadastronecessitadoComponentComponent;
  let fixture: ComponentFixture<CadastronecessitadoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastronecessitadoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastronecessitadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
