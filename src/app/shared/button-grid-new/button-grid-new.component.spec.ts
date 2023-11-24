import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGridNewComponent } from './button-grid-new.component';

describe('ButtonGridNewComponent', () => {
  let component: ButtonGridNewComponent;
  let fixture: ComponentFixture<ButtonGridNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonGridNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGridNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
