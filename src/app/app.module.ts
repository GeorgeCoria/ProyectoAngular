import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TraductorComponent } from './components/traductor/traductor/traductor/traductor.component';
import { LogTraductorComponent } from './components/traductor/logtraductor/log-traductor/log-traductor.component';

import { NavComponent } from './components/layout/nav/nav/nav.component';
import { NoticiaComponent } from './components/noticia/noticia/noticia.component';
import { FormNoticiaComponent } from './components/noticia/form-noticia/form-noticia/form-noticia.component';
import { PasajeComponent } from './components/pasaje/pasaje/pasaje/pasaje.component';
import { FormPasajeComponent } from './components/pasaje/form-pasaje/form-pasaje/form-pasaje.component';
import { HeaderComponent } from './components/layout/header/header/header.component';
import { FooterComponent } from './components/layout/footer/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxDataTableModule} from "angular-9-datatable";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { FormsModule } from '@angular/forms';
import { HomenoticiasComponent } from './components/homenoticias/homenoticias/homenoticias.component';


@NgModule({
  declarations: [
    AppComponent,
    TraductorComponent,
    LogTraductorComponent,
    NavComponent,
    NoticiaComponent,
    FormNoticiaComponent,
    PasajeComponent,
    FormPasajeComponent,
    HeaderComponent,
    FooterComponent,
    HomenoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDataTableModule,
    AlifeFileToBase64Module,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
