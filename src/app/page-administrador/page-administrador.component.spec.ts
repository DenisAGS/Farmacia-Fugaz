import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdministradorComponent } from './page-administrador.component';

describe('PageAdministradorComponent', () => {
  let component: PageAdministradorComponent;
  let fixture: ComponentFixture<PageAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
