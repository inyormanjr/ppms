import { AppRootState } from './../../../../reducers/index';
import { ToastrService } from 'ngx-toastr';
import { ActivityViewState } from './../../reducer/activity.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Activity, ActivityComment } from 'src/app/models/activityAgg/activity';
import { Store } from '@ngrx/store';
import { ActivitySelectorType } from '../../selector/activity.selector.types';
import { ActivityActionType } from '../../action/activity.action.type';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { AppSelectors } from 'src/app/reducers/app.selector.types';
@Component({
  selector: 'app-activity-view-item-list',
  templateUrl: './activity-view-item-list.component.html',
  styleUrls: ['./activity-view-item-list.component.css']
})
export class ActivityViewItemListComponent implements OnInit {
  activityList$: Observable<Activity[]>;
  currentSelected: Activity | undefined;
  newComment: string = '';
  currentUser = '';
  currentComments: ActivityComment[] = [];
  constructor(private store: Store<ActivityViewState>,
    private toastr: ToastrService,
    private activityService: ActivityService,
    private mainStore: Store<AppRootState>) {
    this.currentSelected = undefined;
    this.mainStore.select(AppSelectors.selectUser).subscribe(x => {
      if(x)
      this.currentUser = x?.username;
    }
    );
    this.store.dispatch(ActivityActionType.loadActivitys());
    this.activityList$ = store.select(ActivitySelectorType.selectActivityList);
  }

  ngOnInit(): void {
  }

  viewSelectedActivity(activity: Activity) {
    this.currentSelected = activity;
    this.currentComments = [];
    this.getCommentsByActivityId(activity.id)?.subscribe(x => {
      console.log(x);
      this.currentComments = x;
    });
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

  getCommentsByActivityId(id?: number) {
    if (id) {
      return this.activityService.getComments(id).pipe();
    }
    return undefined;
  }

  createComment(activityId?: number) {
    if (activityId) {
    let newActivtyComment: ActivityComment = {
      activityId: activityId,
      commentorUserName: '',
      commentorId: 0,
      comment: this.newComment,
      createdAt: undefined,
    };
    this.activityService
      .createComment(activityId, newActivtyComment)
      .subscribe((x: ActivityComment) => {
        this.toastr.success('New Comment added.');
        this.newComment = '';
        let newActivtyComment: ActivityComment = {
          activityId: x.activityId,
          commentorUserName: x.commentorUserName,
          commentorId: x.commentorId,
          comment: x.comment,
          createdAt: x.createdAt,
        };
        this.currentComments.push(newActivtyComment);
      });
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
