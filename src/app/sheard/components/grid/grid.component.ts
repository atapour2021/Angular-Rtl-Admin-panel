import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() ColumnDefs: any;
  @Input() RowData: any;
  @Input() IsColumnsToFit!: boolean;

  constructor() {}

  gridApi: any;
  gridColumnApi: any;

  BindData(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.RowData);
    if (this.IsColumnsToFit) {
      this.gridApi.sizeColumnsToFit();
    }
  }
}
