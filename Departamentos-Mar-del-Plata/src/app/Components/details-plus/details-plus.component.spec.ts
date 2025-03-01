import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPlusComponent } from './details-plus.component';

describe('DetailsPlusComponent', () => {
  let component: DetailsPlusComponent;
  let fixture: ComponentFixture<DetailsPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPlusComponent]
    });
    fixture = TestBed.createComponent(DetailsPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
