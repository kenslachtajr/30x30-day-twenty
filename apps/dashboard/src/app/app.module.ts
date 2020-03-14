import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthTokenInterceptorService } from '@ngrx-fruits/core-data';

import { CoreDataModule } from '@ngrx-fruits/core-data';
import { CoreStateModule } from '@ngrx-fruits/core-state';
import { MaterialModule } from '@ngrx-fruits/material';
import { UiLibrariesModule } from '@ngrx-fruits/ui-libraries';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitsItemComponent } from './fruits/fruits-item/fruits-item.component';
import { FruitsDetailsComponent } from './fruits/fruits-details/fruits-details.component';
import { FruitsListComponent } from './fruits/fruits-list/fruits-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    FruitsItemComponent,
    FruitsDetailsComponent,
    FruitsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLibrariesModule,
    RoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
