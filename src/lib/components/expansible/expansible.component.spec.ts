import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansibleComponent } from './expansible.component';

describe('ExpansibleComponent', () => {
  let component: ExpansibleComponent;
  let fixture: ComponentFixture<ExpansibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
