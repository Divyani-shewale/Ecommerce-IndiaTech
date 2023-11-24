import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFormTableNewComponent } from './advance-form-table-new.component';

describe('AdvanceFormTableNewComponent', () => {
  let component: AdvanceFormTableNewComponent;
  let fixture: ComponentFixture<AdvanceFormTableNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceFormTableNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceFormTableNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
