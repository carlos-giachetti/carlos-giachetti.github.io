import { ContentService } from './app-services/content.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServiceComponent } from './service/service.component';
import { Service2Component } from './service2/service2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectivesComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ServiceComponent,
    Service2Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [ ContentService ],  // @Injectable decorator in ContentService makes this useless
  bootstrap: [AppComponent]
})
export class AppModule { }
