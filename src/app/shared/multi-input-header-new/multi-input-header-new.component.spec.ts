import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiInputHeaderNewComponent } from './multi-input-header-new.component';

describe('MultiInputHeaderNewComponent', () => {
  let component: MultiInputHeaderNewComponent;
  let fixture: ComponentFixture<MultiInputHeaderNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiInputHeaderNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiInputHeaderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
