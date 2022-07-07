import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicaoComponent } from './adicao.component';

describe('AdicaoComponent', () => {
  let component: AdicaoComponent;
  let fixture: ComponentFixture<AdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
