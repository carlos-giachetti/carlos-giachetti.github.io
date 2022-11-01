import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServiceComponent } from './service/service.component';
import { Service2Component } from './service2/service2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'  // When this is missing, app-root is not injected in index.html
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'templatedrivenform',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactiveform',
    component: ReactiveFormComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'service2',
    component: Service2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
