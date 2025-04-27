import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInspectionsComponent } from './schedule-inspections.component';

describe('ScheduleInspectionsComponent', () => {
  let component: ScheduleInspectionsComponent;
  let fixture: ComponentFixture<ScheduleInspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleInspectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
