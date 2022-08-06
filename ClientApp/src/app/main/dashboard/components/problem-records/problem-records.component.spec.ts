import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemRecordsComponent } from './problem-records.component';

describe('ProblemRecordsComponent', () => {
  let component: ProblemRecordsComponent;
  let fixture: ComponentFixture<ProblemRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
