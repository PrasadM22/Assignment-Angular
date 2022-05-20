import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RegisterUser } from './components/Register.component';
import { LoginComponent } from './components/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/view/main.component';
import { CreateComponent } from './components/view/create.component';
import { ListComponent } from './components/view/list.component';
import { UpdateComponent } from './components/view/update.component';

@NgModule({
  declarations: [
    RegisterUser,LoginComponent,AppComponent,MainComponent,CreateComponent,ListComponent,UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
