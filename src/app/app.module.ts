import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from '../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../widgets/header/header.component";
import { FooterComponent } from "../widgets/footer/footer.component";

@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, UiModule, HeaderComponent, FooterComponent]
})
export class AppModule {}

