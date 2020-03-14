import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitsService } from '@ngrx-fruits/core-data';

@Component({
  selector: 'ngrx-fruits-fruits-item',
  templateUrl: './fruits-item.component.html',
  styleUrls: ['./fruits-item.component.css']
})
export class FruitsItemComponent implements OnInit {
  _fruit$;
  public get fruit$() {
    return this._fruit$;
  }
  public set fruit$(value) {
    this._fruit$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Fruitservice: FruitsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.fruit$ = this.Fruitservice.findOne(id);
    });
  }

  goBackToFruits() {
    this.router.navigate(['/fruits']);
  }
}
