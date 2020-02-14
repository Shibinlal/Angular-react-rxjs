import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactBaseModule } from './react-base.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularReactBrowserModule } from '@angular-react/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularReactBrowserModule,
    AppRoutingModule,
    ReactBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
