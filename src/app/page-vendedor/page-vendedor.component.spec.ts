import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVendedorComponent } from './page-vendedor.component';

describe('PageVendedorComponent', () => {
  let component: PageVendedorComponent;
  let fixture: ComponentFixture<PageVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
