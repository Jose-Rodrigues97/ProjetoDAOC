import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosComponentComponent } from './contatos-component.component';

describe('ContatosComponentComponent', () => {
  let component: ContatosComponentComponent;
  let fixture: ComponentFixture<ContatosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
