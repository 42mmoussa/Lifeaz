import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionCreateHeaderComponent } from './intervention-create-header.component';

describe('InterventionCreateHeaderComponent', () => {
  let component: InterventionCreateHeaderComponent;
  let fixture: ComponentFixture<InterventionCreateHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionCreateHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionCreateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
