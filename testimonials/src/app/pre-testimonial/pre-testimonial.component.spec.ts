import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreTestimonialComponent } from './pre-testimonial.component';

describe('PreTestimonialComponent', () => {
  let component: PreTestimonialComponent;
  let fixture: ComponentFixture<PreTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
