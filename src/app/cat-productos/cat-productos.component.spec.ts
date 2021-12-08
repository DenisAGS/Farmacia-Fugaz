import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatProductosComponent } from './cat-productos.component';

describe('CatProductosComponent', () => {
  let component: CatProductosComponent;
  let fixture: ComponentFixture<CatProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
