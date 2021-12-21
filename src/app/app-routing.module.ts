import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './layout';
import { CONTENT_ROUTES } from './sheard/routes/content-layout.routing';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: CONTENT_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
