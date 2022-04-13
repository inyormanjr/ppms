import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EskeysReceivedTableCardComponent } from './eskeys-received-table-card.component';

describe('EskeysReceivedTableCardComponent', () => {
  let component: EskeysReceivedTableCardComponent;
  let fixture: ComponentFixture<EskeysReceivedTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EskeysReceivedTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EskeysReceivedTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
