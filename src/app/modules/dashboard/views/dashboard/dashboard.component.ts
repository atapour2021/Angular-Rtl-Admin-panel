import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { GridColumnsDto, GridListDataDto } from '../../dto';
import { DashboardService } from '../../service/dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  @ViewChild('doughnutCanvas') private doughnutCanvas!: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas!: ElementRef;

  barChart!: Chart;
  doughnutChart!: Chart;
  lineChart!: Chart;

  ColumnDefs: GridColumnsDto[] = [];
  RowData: GridListDataDto[] = [];
  AgLoad!: boolean;
  _dashboardService!: DashboardService;

  constructor(private dashboardService: DashboardService) {
    this._dashboardService = dashboardService;
  }

  ngOnInit() {
    this.GetAgColumns();
    this.GetGiftVoucherList();
  }
  ngAfterViewInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
    this.lineChartMethod();
  }

  barChartMethod() {
    const config: ChartConfiguration =
      this._dashboardService.getBarChartConfig();
    if (!this.barCanvas) return;
    this.barChart = new Chart(this.barCanvas.nativeElement, config);
  }
  doughnutChartMethod() {
    const config: ChartConfiguration =
      this._dashboardService.getDoughnutChartConfig();
    if (!this.doughnutCanvas) return;
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, config);
  }
  lineChartMethod() {
    const config: ChartConfiguration =
      this._dashboardService.getLineChartConfig();
    if (!this.lineCanvas) return;
    this.lineChart = new Chart(this.lineCanvas.nativeElement, config);
  }

  GetAgColumns(): void {
    this.ColumnDefs = this._dashboardService.getGridColumns();
  }
  GetGiftVoucherList(): void {
    this.AgLoad = true;
    this.RowData = this._dashboardService.getData();
  }
}
