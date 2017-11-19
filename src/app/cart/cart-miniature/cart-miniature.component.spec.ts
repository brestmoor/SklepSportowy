import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMiniatureComponent } from './cart-miniature.component';

describe('CartMiniatureComponent', () => {
  let component: CartMiniatureComponent;
  let fixture: ComponentFixture<CartMiniatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartMiniatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
