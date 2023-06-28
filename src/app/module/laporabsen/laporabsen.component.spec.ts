import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporabsenComponent } from './laporabsen.component';

describe('LaporabsenComponent', () => {
  let component: LaporabsenComponent;
  let fixture: ComponentFixture<LaporabsenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaporabsenComponent]
    });
    fixture = TestBed.createComponent(LaporabsenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
