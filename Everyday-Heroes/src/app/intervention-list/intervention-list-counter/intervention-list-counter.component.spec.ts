import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionListCounterComponent } from './intervention-list-counter.component';

describe('InterventionListCounterComponent', () => {
  let component: InterventionListCounterComponent;
  let fixture: ComponentFixture<InterventionListCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionListCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionListCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
