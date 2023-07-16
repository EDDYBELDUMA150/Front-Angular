import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUserRolComponent } from './ver-user-rol.component';

describe('VerUserRolComponent', () => {
  let component: VerUserRolComponent;
  let fixture: ComponentFixture<VerUserRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerUserRolComponent]
    });
    fixture = TestBed.createComponent(VerUserRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
