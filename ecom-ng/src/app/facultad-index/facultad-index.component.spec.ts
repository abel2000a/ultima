import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadIndexComponent } from './facultad-index.component';

describe('FacultadIndexComponent', () => {
  let component: FacultadIndexComponent;
  let fixture: ComponentFixture<FacultadIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultadIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
