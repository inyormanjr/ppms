import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EskeysReceiveComponent } from './eskeys-receive.component';

describe('EskeysReceiveComponent', () => {
  let component: EskeysReceiveComponent;
  let fixture: ComponentFixture<EskeysReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EskeysReceiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EskeysReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
