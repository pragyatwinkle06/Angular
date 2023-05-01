import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiAchievComponent } from './certifi-achiev.component';

describe('CertifiAchievComponent', () => {
  let component: CertifiAchievComponent;
  let fixture: ComponentFixture<CertifiAchievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiAchievComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifiAchievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
