import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';

// import { AppRoutingModule } from './app-routing.module';

// tslint:disable-next-line:comment-format
//Services
import { ServiceModule } from './services/service.module';



// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Modulos
import { PagesModule } from './pages/page.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
