import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './views';
import { NgChartsModule } from 'ng2-charts';
import { SheardModule } from 'src/app/sheard';
import { DashboardService } from './service/dashboard.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, NgChartsModule, SheardModule],
  providers: [{ provide: DashboardService }],
})
export class DashboardModule {}
