import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxSelectModule, IgxInputGroupModule } from '@infragistics/igniteui-angular';
import { CascadeSelectComponent } from './cascade-select.component';

describe('CascadeSelectComponent', () => {
  let component: CascadeSelectComponent;
  let fixture: ComponentFixture<CascadeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadeSelectComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxSelectModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
