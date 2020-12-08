import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { EventosComponent } from "./eventos/eventos.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, EventosComponent, NavComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
