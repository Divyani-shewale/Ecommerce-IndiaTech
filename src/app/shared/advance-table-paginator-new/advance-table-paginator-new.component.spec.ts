import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTablePaginatorNewComponent } from './advance-table-paginator-new.component';

describe('AdvanceTablePaginatorNewComponent', () => {
  let component: AdvanceTablePaginatorNewComponent;
  let fixture: ComponentFixture<AdvanceTablePaginatorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceTablePaginatorNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceTablePaginatorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
