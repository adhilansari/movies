import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIMgComponent } from './hero-img.component';

describe('HeroIMgComponent', () => {
  let component: HeroIMgComponent;
  let fixture: ComponentFixture<HeroIMgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroIMgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroIMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
