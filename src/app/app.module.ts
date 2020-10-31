import { NgModule, Provider } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ErrorComponent } from './components/error/error.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { HomeComponent } from './components/home/home.component';
import { HttpComponent } from './components/http/http.component';
import { NavComponent } from './components/nav/nav.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { WrapperPipe } from './components/pipes/wrapper.pipe';
import { SwitchComponent } from './components/switch/switch.component';
import { TodosComponent } from './components/todos/todos.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { HiliteDirective } from './directives/hilite.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { StylesDirective } from './directives/styles.directive';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { FilterListPipe } from './pipes/filter-list.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { AuthInterceptor } from './cms-admin/services/auth.interceptor';

const AUTH_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    FormReactiveComponent,
    FormTemplateComponent,
    NavComponent,
    ErrorComponent,
    ObservablesComponent,
    PipesComponent,
    WrapperPipe,
    HttpComponent,
    HiliteDirective,
    DirectivesComponent,
    StylesDirective,
    SwitchComponent,
    IfnotDirective,
    ViewerComponent,
    FilterPipe,
    FilterListPipe,
    PaginationComponent,
    PaginationPipe,
    FilterDatePipe,
    HighlightPipe,
    HomeComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AUTH_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
