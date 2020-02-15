import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { CompanyModule } from './company/company.module';
import { CompanyService } from './company/company.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ImplantationModule } from './implantation/implantation.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { ModuloModule } from './modulo/modulo.module';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    MenuModule,
    HomeModule,
    CompanyModule,
    SharedModule,
    ImplantationModule,
    ModuloModule
  ],
  providers: [CompanyService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
