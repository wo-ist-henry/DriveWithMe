import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [ 
{
  path: 'Mitfahrzentrale',
  component: HomeComponent
},
{ path: '',
  redirectTo: '/Mitfahrzentrale',
  pathMatch: 'full'
},
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
