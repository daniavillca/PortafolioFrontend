import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacaionComponent } from './educacaion.component';

describe('EducacaionComponent', () => {
  let component: EducacaionComponent;
  let fixture: ComponentFixture<EducacaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacaionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
