import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JpoSideMenuComponent, TitleColor} from 'jpo-side-menu'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JpoSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jpo-testbed-app';
  titleColorReference = TitleColor;
  isAuthenticated = signal(true)

}
