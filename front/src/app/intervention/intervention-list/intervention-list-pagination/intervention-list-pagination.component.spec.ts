import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionListPaginationComponent } from './intervention-list-pagination.component';

describe('InterventionListPaginationComponent', () => {
  let component: InterventionListPaginationComponent;
  let fixture: ComponentFixture<InterventionListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
