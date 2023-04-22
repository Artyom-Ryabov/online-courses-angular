import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from '../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, UiModule]
})
export class AppModule {}

