import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatebankingComponent } from './corporatebanking.component';

describe('CorporatebankingComponent', () => {
  let component: CorporatebankingComponent;
  let fixture: ComponentFixture<CorporatebankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatebankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatebankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
