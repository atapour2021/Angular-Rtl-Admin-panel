import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import {
  ApplicationComponent,
  MenuListItemComponent,
  NavService
} from './layout';
import { SheardModule } from './sheard';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, ApplicationComponent, MenuListItemComponent],
  imports: [
    RouterModule.forRoot(routes, { useHash: false }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SheardModule,
    ToastNotificationsModule,
    CoreModule,
  ],
  providers: [{ provide: NavService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
