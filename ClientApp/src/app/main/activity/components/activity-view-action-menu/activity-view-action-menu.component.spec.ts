import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityViewActionMenuComponent } from './activity-view-action-menu.component';

describe('ActivityViewActionMenuComponent', () => {
  let component: ActivityViewActionMenuComponent;
  let fixture: ComponentFixture<ActivityViewActionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityViewActionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityViewActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
