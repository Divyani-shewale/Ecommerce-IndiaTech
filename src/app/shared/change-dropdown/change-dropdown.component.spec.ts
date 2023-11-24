import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDropdownComponent } from './change-dropdown.component';

describe('ChangeDropdownComponent', () => {
  let component: ChangeDropdownComponent;
  let fixture: ComponentFixture<ChangeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
