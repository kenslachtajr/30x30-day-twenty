import { Component, OnInit, Input } from '@angular/core';
import { AuthService, NotifyService } from '@ngrx-fruits/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'ngrx-fruits-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  userStatus = ['exit_to_app', 'person'];
  buttonStatus;

  @Input() sidenav;
  @Input() authenticated$;
  @Input() title;

  constructor(
    private auth: AuthService,
    private notify: NotifyService,
    private route: Router
  ) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.notify.notification('Successfully Logged Out');
  }

  login() {
    this.route.navigate(['login']);
  }
}
