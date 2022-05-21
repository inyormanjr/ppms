import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { EskeysService } from 'src/app/services/eskeys/eskeys.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eskey-create',
  templateUrl: './eskey-create.component.html',
  styleUrls: ['./eskey-create.component.css'],
})
export class EskeyCreateComponent implements OnInit {
  eskeyReceivableForm: FormGroup;
  disableGenerate: boolean = false;
  constructor(private fb: FormBuilder, private eskeyService: EskeysService,
    private router: Router, private toaster: ToastrService) {
    this.eskeyReceivableForm = fb.group({
      count: [1, [Validators.required]],
      location: ['', [Validators.required]],
      arrivalDateTime: [],
      dateProcessed: [],
      dateTimeReceived: [],
      charter: ['', [Validators.required]],
      eskeyReceivableDetails: fb.array([]),
    });
  }

  ngOnInit(): void {}

  get eskeyReceivableDetailsControl(): FormGroup {
    return this.fb.group({
      eskeyNo: [0],
      description: [''],
      temp: [''],
      initials: [''],
    });
  }

  get eskeyReceivableDetails(): FormArray {
    return this.eskeyReceivableForm.controls
      .eskeyReceivableDetails as FormArray;
  }

  generateEskeyReceivableDetails() {
    for (
      let index = 0;
      index < this.eskeyReceivableForm.controls.count.value;
      index++
    ) {
      (
        this.eskeyReceivableForm.controls.eskeyReceivableDetails as FormArray
      ).push(this.eskeyReceivableDetailsControl);
    }
    this.disableGenerate = true;
  }

  addOneEskeyReceivableDetail() {
    let countNewValue =
      (this.eskeyReceivableForm.controls.count.value as number) + 1;
    this.eskeyReceivableForm.controls.count.patchValue(countNewValue);
    this.eskeyReceivableDetails.push(this.eskeyReceivableDetailsControl);
  }

  removeSelectedEskeyReceivableDetail(index: number) {
     let countNewValue =
       (this.eskeyReceivableForm.controls.count.value as number) - 1;
    this.eskeyReceivableForm.controls.count.patchValue(countNewValue);
    this.eskeyReceivableDetails.removeAt(index);
  }

  createEskey() {
    let receivable = Object.assign(this.eskeyReceivableForm.value);

    this.eskeyService
     .Create(receivable)
      .subscribe((result) => {
        this.toaster.success("Eskey Delivery Created Successfully.");
      this.router.navigate(['home/eskeys']);
     });
  }
  trackByFn(index: any, item: any) {
    return index;
  }
}
