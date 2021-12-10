import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUsuarioComponent } from './rol-usuario.component';

describe('RolUsuarioComponent', () => {
  let component: RolUsuarioComponent;
  let fixture: ComponentFixture<RolUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
