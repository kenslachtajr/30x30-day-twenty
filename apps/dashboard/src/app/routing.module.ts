import {NgModule} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitsItemComponent } from './fruits/fruits-item/fruits-item.component';
import { LoginComponent } from '@ngrx-fruits/ui-libraries';
import { WildcardComponent } from '@ngrx-fruits/ui-libraries';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildcardComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'fruits/:id', component: FruitsItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
