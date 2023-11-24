import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListNewComponent } from './card-list-new.component';

describe('CardListNewComponent', () => {
  let component: CardListNewComponent;
  let fixture: ComponentFixture<CardListNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
