import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeQuotesComponent } from './free-quotes.component';

describe('FreeQuotesComponent', () => {
  let component: FreeQuotesComponent;
  let fixture: ComponentFixture<FreeQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeQuotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
