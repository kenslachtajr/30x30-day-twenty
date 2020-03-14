import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsDetailsComponent } from './fruits-details.component';

describe('FruitsDetailsComponent', () => {
  let component: FruitsDetailsComponent;
  let fixture: ComponentFixture<FruitsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
