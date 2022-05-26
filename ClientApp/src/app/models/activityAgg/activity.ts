

import { ActivityLevel } from './activity.level';
import { ActivityType } from './activityType';


export interface Activity {
  id: number;
  subject: string;
  departmentId: number;
  departmentName: string;
  description: string;
  activityTypeId: number;
  type: ActivityType;
  createdAt: string;
  createdById: number;
  typeName: string;
  createdByName: string;
  createdByUsername: string;
  level: ActivityLevel;
  assignees: Assignee[];
  comments: ActivityComment[];
}


export interface Assignee {
  assigneeId: number;
  assigneeUserName: string;
  isSelected: boolean;
}

export interface ActivityComment {
  commentorId: number;
  activityId: number;
  commentorUserName: string;
  comment: string;
  createdAt?: string;
}
