import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngrx-fruits-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.css']
})
export class WildcardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}

  redirectToFruits() {
    this.router.navigate(['./fruits']);
  }
}
