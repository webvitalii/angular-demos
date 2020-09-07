import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { HttpComponent } from './components/http/http.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  // { path: '', component: FormReactiveComponent },
  { path: '', redirectTo: '/form-template', pathMatch: 'full' },
  { path: 'form-template', component: FormTemplateComponent },
  { path: 'form-reactive', component: FormReactiveComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'http', component: HttpComponent },
  { path: 'not-found', component: ErrorComponent, data: {message: 'Page Not Found'} },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
