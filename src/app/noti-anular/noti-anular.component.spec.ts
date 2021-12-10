import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiAnularComponent } from './noti-anular.component';

describe('NotiAnularComponent', () => {
  let component: NotiAnularComponent;
  let fixture: ComponentFixture<NotiAnularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiAnularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiAnularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
