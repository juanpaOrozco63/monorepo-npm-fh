import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


export enum TitleColor  {
  red = 'text-red-500',
  blue = 'text-blue-500',
  green = 'text-green-500',
  purple = 'text-purple-500'
}

@Component({
  selector: 'lib-jpo-side-menu',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './jpo-side-menu.component.html',
  styles: ``
})
export class JpoSideMenuComponent {
  isAuthenticated = input(false);
  title = input('JPO');
  subtitle = input('Corp');
  onSignOut = output();
  onSignIn = output();
  titleColor = input<TitleColor>(TitleColor.purple);
}
