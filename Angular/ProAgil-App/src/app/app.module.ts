import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateTimeFormatPipePipe } from './_helper/date-time-format-pipe.pipe';
import { UsuarioService } from './_services/usuario.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { TituloComponent } from './_shared/titulo/titulo.component';


@NgModule({
  declarations: [AppComponent,
    UsuariosComponent,
    NavComponent,
    DateTimeFormatPipePipe,
     DateTimeFormatPipePipe,
        TituloComponent],
  imports: [BrowserModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
     HttpClientModule, FormsModule,
     FontAwesomeModule, ModalModule.forRoot(),
      ReactiveFormsModule, ToastrModule.forRoot(),
      AppRoutingModule],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
