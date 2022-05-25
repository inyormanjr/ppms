
import { User } from 'src/app/models/user';
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
  assignees: User[];
}
