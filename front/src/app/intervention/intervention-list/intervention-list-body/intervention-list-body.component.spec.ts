import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionListBodyComponent } from './intervention-list-body.component';

describe('InterventionListBodyComponent', () => {
  let component: InterventionListBodyComponent;
  let fixture: ComponentFixture<InterventionListBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionListBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
