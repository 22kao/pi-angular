import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
    canActivate: [AuthGuard]
    //loadChildren: () => CompanyModule
  },
  {
    path: 'implantation',
    loadChildren: () => import('./implantation/implantation.module').then(md => md.ImplantationModule),
    canActivate: [AuthGuard]
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