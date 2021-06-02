import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomenoticiasComponent } from './components/homenoticias/homenoticias/homenoticias.component';
import { FormNoticiaComponent } from './components/noticia/form-noticia/form-noticia/form-noticia.component';
import { NoticiaComponent } from './components/noticia/noticia/noticia.component';
import { FormPasajeComponent } from './components/pasaje/form-pasaje/form-pasaje/form-pasaje.component';
import { PasajeComponent } from './components/pasaje/pasaje/pasaje/pasaje.component';
import { LogTraductorComponent } from './components/traductor/logtraductor/log-traductor/log-traductor.component';
import { TraductorComponent } from './components/traductor/traductor/traductor/traductor.component';

const routes: Routes = [
  {path: '', component: FormNoticiaComponent},
  {path: 'traductor', component: TraductorComponent},
  {path: 'traductor/historial', component: LogTraductorComponent},
  {path: 'noticia/home', component: HomenoticiasComponent},
  {path: 'noticia/form-noticia', component:FormNoticiaComponent},
  {path: 'noticia/noticias', component: NoticiaComponent},
  {path: 'pasajes', component: PasajeComponent},
  {path: 'pasajes/form-pasajes/:id', component: FormPasajeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
