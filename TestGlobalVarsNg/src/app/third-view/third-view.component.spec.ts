import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdViewComponent } from './third-view.component';

describe('ThirdViewComponent', () => {
  let component: ThirdViewComponent;
  let fixture: ComponentFixture<ThirdViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdViewComponent]
    });
    fixture = TestBed.createComponent(ThirdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
