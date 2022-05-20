import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { RegisterUser } from './components/Register.component';
import { CreateComponent } from './components/view/create.component';
import { ListComponent } from './components/view/list.component';
import { UpdateComponent } from './components/view/update.component';
import { MainComponent } from './components/view/main.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUser },
  { path: 'Add', component: CreateComponent },
  { path: 'list', component: ListComponent},
  { path: 'update', component: UpdateComponent },
  { path: 'Main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }