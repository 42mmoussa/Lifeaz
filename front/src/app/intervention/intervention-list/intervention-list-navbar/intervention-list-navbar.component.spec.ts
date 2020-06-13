import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionListNavbarComponent } from './intervention-list-navbar.component';

describe('InterventionListNavbarComponent', () => {
  let component: InterventionListNavbarComponent;
  let fixture: ComponentFixture<InterventionListNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionListNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionListNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
