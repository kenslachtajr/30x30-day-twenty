import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsItemComponent } from './fruits-item.component';

describe('FruitsItemComponent', () => {
  let component: FruitsItemComponent;
  let fixture: ComponentFixture<FruitsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
