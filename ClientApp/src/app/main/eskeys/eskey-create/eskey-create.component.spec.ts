import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EskeyCreateComponent } from './eskey-create.component';

describe('EskeyCreateComponent', () => {
  let component: EskeyCreateComponent;
  let fixture: ComponentFixture<EskeyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EskeyCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EskeyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
