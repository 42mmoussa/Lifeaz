import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionListSearchComponent } from './intervention-list-search.component';

describe('InterventionListSearchComponent', () => {
  let component: InterventionListSearchComponent;
  let fixture: ComponentFixture<InterventionListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
