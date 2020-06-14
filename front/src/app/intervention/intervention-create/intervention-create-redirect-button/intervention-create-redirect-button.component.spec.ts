import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionCreateRedirectButtonComponent } from './intervention-create-redirect-button.component';

describe('InterventionCreateRedirectButtonComponent', () => {
  let component: InterventionCreateRedirectButtonComponent;
  let fixture: ComponentFixture<InterventionCreateRedirectButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionCreateRedirectButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionCreateRedirectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
