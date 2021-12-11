import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiAddUsuarioComponent } from './noti-add-usuario.component';

describe('NotiAddUsuarioComponent', () => {
  let component: NotiAddUsuarioComponent;
  let fixture: ComponentFixture<NotiAddUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiAddUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiAddUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
