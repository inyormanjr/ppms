import { UserServicesService } from 'src/app/services/user-services.service';
import { UserProfile } from './../../../models/receivablesAgg/userProfile';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable, noop } from 'rxjs';
import { ProfileState } from './../reducer/profile.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ProfileSelectorTypes } from '../reducer/selector/profile.selector.types';
import { ProfileActions } from '../reducer/action/profile.action.types';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
})
export class ProfileViewComponent implements OnInit {
  profileFormGroup: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    private fB: FormBuilder,
    private userService: UserServicesService
  ) {

    this.profileFormGroup = fB.group({});
    this.activatedRoute.data.subscribe((response: any) => {
       this.profileFormGroup = fB.group({
         id: [response.userProfile.id],
         userName: [response.userProfile.userName],
         givenName: [response.userProfile.givenName],
         surname: [response.userProfile.surname],
         contact: [response.userProfile.contact],
         address: [response.userProfile.address],
       });
    });
  }

  ngOnInit(): void {}

  updateProfile() {
    let userProfile = Object.assign({}, this.profileFormGroup.value);
    this.userService.updateProfile(userProfile).subscribe((result: UserProfile) => {
        this.toaster.success('Profile update successful');
    }, error => {
          this.toaster.error('Profile update failed');
    })
  }
}
