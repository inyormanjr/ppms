import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EskeysViewComponent } from './eskeys-view.component';

describe('EskeysViewComponent', () => {
  let component: EskeysViewComponent;
  let fixture: ComponentFixture<EskeysViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EskeysViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EskeysViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
