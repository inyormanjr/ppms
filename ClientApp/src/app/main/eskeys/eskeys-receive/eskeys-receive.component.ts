import { EskeysService } from 'src/app/services/eskeys/eskeys.service';
import { EskeyReceivableDetail } from './../../../models/receivablesAgg/eskeyReceivableDetail';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EskeyReceivable } from 'src/app/models/receivablesAgg/eskeyReceivable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eskeys-receive',
  templateUrl: './eskeys-receive.component.html',
  styleUrls: ['./eskeys-receive.component.css'],
})
export class EskeysReceiveComponent implements OnInit {
  eskeyReceivableForm: FormGroup;
  EskeyReceivable!: EskeyReceivable;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private eskeyService: EskeysService,
    private toaster: ToastrService
  ) {
    this.activatedRoute.data.subscribe((response: any) => {
      this.EskeyReceivable = response.eskeyReceivable;
    });

    this.eskeyReceivableForm = this.fb.group({
      id: [this.EskeyReceivable.id],
      count: [this.EskeyReceivable.count, [Validators.required]],
      location: [this.EskeyReceivable.location, [Validators.required]],
      arrivalDateTime: [this.EskeyReceivable.arrivalDateTime],
      dateProcessed: [this.EskeyReceivable.dateProcessed],
      dateTimeReceived: [],
      operatorId: [this.EskeyReceivable.operatorId],
      charter: [this.EskeyReceivable.charter, [Validators.required]],
      eskeyReceivableDetails: this.fb.array(
        this.EskeyReceivable.eskeyReceivableDetails.map((data) => {
          return this.generateReceivableDetailsForm(data);
        })
      ),
    });
  }

  private generateReceivableDetailsForm(data: any) {
    return this.fb.group({
      id: this.fb.control(data.id),
      eskeyNo: this.fb.control(data.eskeyNo),
      description: this.fb.control(data.description),
      temp: this.fb.control(data.temp),
      initials: this.fb.control(data.initials),
      checked: this.fb.control(data.checked),
    });
  }

  ngOnInit(): void {}
  trackByFn(index: any, item: any) {
    return index;
  }

  receiveEskeyDelivery() {
    var receivedDelivery = Object.assign({}, this.eskeyReceivableForm.value);
    console.log(receivedDelivery);
    this.eskeyService
      .Update(receivedDelivery.id, receivedDelivery)
      .subscribe((x) => {
        this.toaster.success('Eskey Delivery Received', 'Eskey Receiving');
        this.router.navigate(['home/eskeys']);
      });
  }
}
