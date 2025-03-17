import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpoSideMenuComponent } from './jpo-side-menu.component';
import { provideRouter } from '@angular/router';

describe('JpoSideMenuComponent', () => {
  let component: JpoSideMenuComponent;
  let fixture: ComponentFixture<JpoSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JpoSideMenuComponent
        
      ],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JpoSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calll ongSing  when button is clicked',()=>{
      spyOn(component.onSignIn,'emit');
      fixture.componentRef.setInput('isAuthenticated',false);
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;
      expect(button).toBeTruthy();
      button.click();
      expect(component.onSignIn.emit).toHaveBeenCalled(); 
  })
  it('should calll ongSing  when button is clicked',()=>{
      spyOn(component.onSignOut,'emit');
      fixture.componentRef.setInput('isAuthenticated',true);
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;
      expect(button).toBeTruthy();
      button.click();
      expect(component.onSignOut.emit).toHaveBeenCalled(); 
  })
});
