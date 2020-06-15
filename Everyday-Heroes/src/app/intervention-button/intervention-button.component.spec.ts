import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionButtonComponent } from './intervention-button.component';

describe('InterventionCreateRedirectButtonComponent', () => {
  let component: InterventionButtonComponent;
  let fixture: ComponentFixture<InterventionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
