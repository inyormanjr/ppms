import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityViewItemListComponent } from './activity-view-item-list.component';

describe('ActivityViewItemListComponent', () => {
  let component: ActivityViewItemListComponent;
  let fixture: ComponentFixture<ActivityViewItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityViewItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityViewItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
