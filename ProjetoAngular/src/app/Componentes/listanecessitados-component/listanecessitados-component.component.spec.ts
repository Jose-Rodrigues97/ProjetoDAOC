import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanecessitadosComponentComponent } from './listanecessitados-component.component';

describe('ListanecessitadosComponentComponent', () => {
  let component: ListanecessitadosComponentComponent;
  let fixture: ComponentFixture<ListanecessitadosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListanecessitadosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListanecessitadosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
