import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterfyComponent } from './toasterfy.component';

describe('ToasterfyComponent', () => {
  let component: ToasterfyComponent;
  let fixture: ComponentFixture<ToasterfyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterfyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
