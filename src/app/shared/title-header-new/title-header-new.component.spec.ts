import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleHeaderNewComponent } from './title-header-new.component';

describe('TitleHeaderNewComponent', () => {
  let component: TitleHeaderNewComponent;
  let fixture: ComponentFixture<TitleHeaderNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleHeaderNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleHeaderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
