import { ActivityViewState } from './../../reducer/activity.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activityAgg/activity';
import { Store } from '@ngrx/store';
import { ActivitySelectorType } from '../../selector/activity.selector.types';
import { ActivityActionType } from '../../action/activity.action.type';

@Component({
  selector: 'app-activity-view-item-list',
  templateUrl: './activity-view-item-list.component.html',
  styleUrls: ['./activity-view-item-list.component.css']
})
export class ActivityViewItemListComponent implements OnInit {
  activityList$: Observable<Activity[]>;
  currentSelected: Activity | undefined;
  constructor(private store: Store<ActivityViewState>) {
    this.currentSelected = undefined;
    this.store.dispatch(ActivityActionType.loadActivitys());
    this.activityList$ = store.select(ActivitySelectorType.selectActivityList);
  }

  ngOnInit(): void {
  }

  viewSelectedActivity(activity: Activity) {
    this.currentSelected = activity;
  }

  levelIdentifier(level?: number) {
    switch (level) {
      case 0:
        return "Normal";
      case 1:
        return "Important";
      case 2:
        return "Urgent";
      default:
        return "Normal";
    }
  }

  levelColorIdentifier(level?: number) {
    switch (level) {
      case 0:
        return 'bg-secondary';
      case 1:
        return 'bg-warning';
      case 2:
        return 'bg-primary';
      default:
        return 'bg-success';
    }
  }

}
