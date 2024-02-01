import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewchildComponent } from './newchild.component';

describe('NewchildComponent', () => {
  let component: NewchildComponent;
  let fixture: ComponentFixture<NewchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewchildComponent]
    });
    fixture = TestBed.createComponent(NewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
