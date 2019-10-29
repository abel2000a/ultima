import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadFormComponent } from './facultad-form.component';

describe('FacultadFormComponent', () => {
  let component: FacultadFormComponent;
  let fixture: ComponentFixture<FacultadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
