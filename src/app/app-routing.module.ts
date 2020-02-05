import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
    //loadChildren: () => CompanyModule
  },
  {
    path: 'implantation',
    loadChildren: () => import('./implantation/implantation.module').then(md => md.ImplantationModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const RoutingModule = RouterModule.forRoot(routes);