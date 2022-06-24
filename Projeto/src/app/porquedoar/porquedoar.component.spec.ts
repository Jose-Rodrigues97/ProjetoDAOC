import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorquedoarComponent } from './porquedoar.component';

describe('PorquedoarComponent', () => {
  let component: PorquedoarComponent;
  let fixture: ComponentFixture<PorquedoarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorquedoarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorquedoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
