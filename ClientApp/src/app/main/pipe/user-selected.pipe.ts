
import { Pipe, PipeTransform } from '@angular/core';
import { Assignee } from 'src/app/models/activityAgg/activity';

@Pipe({
  name: 'userSelected',
  pure: false,
})
export class UserSelectedPipe implements PipeTransform {
  transform(users: Assignee[], _args?: any): Assignee[] {
    return users.filter((user) => {
      return user.isSelected === true;
    });
  }
}
