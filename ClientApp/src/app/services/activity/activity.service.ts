import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';
import { Activity, ActivityComment } from 'src/app/models/activityAgg/activity';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivityType } from 'src/app/models/activityAgg/activityType';

@Injectable({
  providedIn: 'root',
})
export class ActivityService extends BaseService<Activity> {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.baseURL = this.baseURL + 'activity/';
  }

  getActivityTypes(): Observable<ActivityType[]> {
    return this.httpClient.get<ActivityType[]>(this.baseURL + "activityType")
  }

  getComments(activityId: number): Observable<ActivityComment[]> {
    return this.httpClient.get<ActivityComment[]>(this.baseURL + 'comment/' + activityId).pipe();
  }

  createComment(activityId: number, activityComment: ActivityComment): Observable<ActivityComment> {
    return this.httpClient.post<ActivityComment>(this.baseURL + 'comment', activityComment).pipe();
  }

}
