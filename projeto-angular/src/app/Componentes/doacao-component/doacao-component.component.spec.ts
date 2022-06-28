import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoComponentComponent } from './doacao-component.component';

describe('DoacaoComponentComponent', () => {
  let component: DoacaoComponentComponent;
  let fixture: ComponentFixture<DoacaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoacaoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoacaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
