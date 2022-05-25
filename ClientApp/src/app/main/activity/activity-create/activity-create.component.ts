import { Router } from '@angular/router';
import { ActivityType } from './../../../models/activityAgg/activityType';
import { Observable } from 'rxjs';
import { ActivityService } from './../../../services/activity/activity.service';
import { ActivityLevel } from './../../../models/activityAgg/activity.level';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.css']
})
export class ActivityCreateComponent implements OnInit {
  activityForm: FormGroup;
  activityTypes$: Observable<ActivityType[]>;

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '5',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
  constructor(private fB: FormBuilder, private activityService: ActivityService, private toaster: ToastrService, private router: Router) {
    this.activityTypes$ = activityService.getActivityTypes();
    this.activityForm = fB.group({
      id: [0],
      subject: [],
      description: [],
      activityTypeId: [],
      level: [ActivityLevel.Normal]
    })
   }

  ngOnInit(): void {
  }

  save() {
    let newActivity = Object.assign({}, this.activityForm.value);

    this.activityService.Create(newActivity).subscribe(x => {
      this.toaster.success("New Activity Created.");
      this.router.navigate(['home/activities']);
    }, error => {
      this.toaster.error('Something went wrong saving.')
    });
  }

}
