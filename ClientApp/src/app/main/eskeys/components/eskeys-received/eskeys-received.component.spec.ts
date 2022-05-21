import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EskeysReceivedComponent } from './eskeys-received.component';

describe('EskeysReceivedComponent', () => {
  let component: EskeysReceivedComponent;
  let fixture: ComponentFixture<EskeysReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EskeysReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EskeysReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
