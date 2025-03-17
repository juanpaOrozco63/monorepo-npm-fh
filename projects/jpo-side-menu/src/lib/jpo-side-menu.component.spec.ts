import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpoSideMenuComponent } from './jpo-side-menu.component';

describe('JpoSideMenuComponent', () => {
  let component: JpoSideMenuComponent;
  let fixture: ComponentFixture<JpoSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JpoSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JpoSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
