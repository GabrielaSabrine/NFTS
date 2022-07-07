import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { CoreModule } from './core/core.module';
import { CursosComponent } from './cursos/cursos.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthRoutingModule, HotToastModule.forRoot(),
    CursosComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
