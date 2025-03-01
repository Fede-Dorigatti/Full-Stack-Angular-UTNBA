import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatamentsComponent } from './depataments.component';

describe('DepatamentsComponent', () => {
  let component: DepatamentsComponent;
  let fixture: ComponentFixture<DepatamentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepatamentsComponent]
    });
    fixture = TestBed.createComponent(DepatamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
