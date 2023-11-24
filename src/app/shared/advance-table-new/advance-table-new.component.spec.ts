import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTableNewComponent } from './advance-table-new.component';

describe('AdvanceTableNewComponent', () => {
  let component: AdvanceTableNewComponent;
  let fixture: ComponentFixture<AdvanceTableNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceTableNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceTableNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
