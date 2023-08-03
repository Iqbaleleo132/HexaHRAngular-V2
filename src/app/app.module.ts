import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ModuleModule } from './module/module.module';
import { DefaultModule } from './default/default.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Card, CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    ModuleModule,
    NgbDropdownModule,
    DefaultModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CardModule,
    InputTextModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token')
      }
    })
  ],

  // exports: [
  //   JwtModule
  // ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
