import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBillComponent } from './register-bill.component';

describe('RegisterBillComponent', () => {
  let component: RegisterBillComponent;
  let fixture: ComponentFixture<RegisterBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
