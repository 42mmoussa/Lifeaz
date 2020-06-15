import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionCreateFormComponent } from './intervention-create-form.component';

describe('InterventionCreateFormComponent', () => {
  let component: InterventionCreateFormComponent;
  let fixture: ComponentFixture<InterventionCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
