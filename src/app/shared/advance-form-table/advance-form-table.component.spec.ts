import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFormTableComponent } from './advance-form-table.component';

describe('AdvanceFormTableComponent', () => {
  let component: AdvanceFormTableComponent;
  let fixture: ComponentFixture<AdvanceFormTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceFormTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceFormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
