import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivComponent } from './admin-activ.component';

describe('AdminActivComponent', () => {
  let component: AdminActivComponent;
  let fixture: ComponentFixture<AdminActivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminActivComponent]
    });
    fixture = TestBed.createComponent(AdminActivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
