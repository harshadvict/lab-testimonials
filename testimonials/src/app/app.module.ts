import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { AddtestimonialComponent } from './addtestimonial/addtestimonial.component';
import { HeaderComponent } from './header/header.component';
import { PreTestimonialComponent } from './pre-testimonial/pre-testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    MaincomponentComponent,
    AddtestimonialComponent,
    HeaderComponent,
    PreTestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
