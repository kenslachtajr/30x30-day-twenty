import { Component } from '@angular/core';
import { AuthService } from '@ngrx-fruits/core-data';

@Component({
  selector: 'ngrx-fruits-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fruits MDV';

  links = [
    { path: '/fruits', icon: 'work', title: 'Fruits'}
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {}
}
