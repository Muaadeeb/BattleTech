import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeOfStrifeComponent } from './age-of-strife.component';

describe('AgeOfStrifeComponent', () => {
  let component: AgeOfStrifeComponent;
  let fixture: ComponentFixture<AgeOfStrifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeOfStrifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeOfStrifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
