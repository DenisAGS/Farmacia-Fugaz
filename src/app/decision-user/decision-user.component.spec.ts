import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionUserComponent } from './decision-user.component';

describe('DecisionUserComponent', () => {
  let component: DecisionUserComponent;
  let fixture: ComponentFixture<DecisionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
