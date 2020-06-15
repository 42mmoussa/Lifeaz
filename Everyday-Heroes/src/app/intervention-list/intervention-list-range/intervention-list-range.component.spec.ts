import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionListRangeComponent } from './intervention-list-range.component';

describe('InterventionListRangeComponent', () => {
  let component: InterventionListRangeComponent;
  let fixture: ComponentFixture<InterventionListRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionListRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionListRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
