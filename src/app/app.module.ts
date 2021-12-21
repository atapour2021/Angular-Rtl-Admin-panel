import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from './sheard';
import { CoreModule } from './core';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import {
  ApplicationComponent,
  MenuListItemComponent,
  NavService,
} from './layout';

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
  bootstrap: [AppComponent],
})
export class AppModule {}
