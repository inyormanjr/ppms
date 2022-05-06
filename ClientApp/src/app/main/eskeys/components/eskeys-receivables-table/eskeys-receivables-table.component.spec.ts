import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EskeysReceivablesTableComponent } from './eskeys-receivables-table.component';

describe('EskeysReceivablesTableComponent', () => {
  let component: EskeysReceivablesTableComponent;
  let fixture: ComponentFixture<EskeysReceivablesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EskeysReceivablesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EskeysReceivablesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
