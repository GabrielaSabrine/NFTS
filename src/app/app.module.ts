import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CursosModule } from './cursos/cursos.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    CursosModule, 
    AuthRoutingModule, HotToastModule.forRoot(),
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
