import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EskeysIncomingTableCardComponent } from './eskeys-incoming-table-card.component';

describe('EskeysIncomingTableCardComponent', () => {
  let component: EskeysIncomingTableCardComponent;
  let fixture: ComponentFixture<EskeysIncomingTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EskeysIncomingTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EskeysIncomingTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
