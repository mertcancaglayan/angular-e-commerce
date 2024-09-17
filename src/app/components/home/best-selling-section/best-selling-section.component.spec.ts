import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingSectionComponent } from './best-selling-section.component';

describe('BestSellingSectionComponent', () => {
  let component: BestSellingSectionComponent;
  let fixture: ComponentFixture<BestSellingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestSellingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
