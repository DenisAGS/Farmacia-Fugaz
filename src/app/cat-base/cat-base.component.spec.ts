import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBaseComponent } from './cat-base.component';

describe('CatBaseComponent', () => {
  let component: CatBaseComponent;
  let fixture: ComponentFixture<CatBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
