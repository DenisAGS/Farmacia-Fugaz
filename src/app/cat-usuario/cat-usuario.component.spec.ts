import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUsuarioComponent } from './cat-usuario.component';

describe('CatUsuarioComponent', () => {
  let component: CatUsuarioComponent;
  let fixture: ComponentFixture<CatUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
