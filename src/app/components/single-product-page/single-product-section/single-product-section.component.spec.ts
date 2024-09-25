import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductSectionComponent } from './single-product-section.component';

describe('SingleProductSectionComponent', () => {
  let component: SingleProductSectionComponent;
  let fixture: ComponentFixture<SingleProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProductSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
