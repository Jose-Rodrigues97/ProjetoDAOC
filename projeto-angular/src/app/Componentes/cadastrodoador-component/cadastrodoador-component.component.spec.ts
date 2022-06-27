import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrodoadorComponentComponent } from './cadastrodoador-component.component';

describe('CadastrodoadorComponentComponent', () => {
  let component: CadastrodoadorComponentComponent;
  let fixture: ComponentFixture<CadastrodoadorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrodoadorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrodoadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
