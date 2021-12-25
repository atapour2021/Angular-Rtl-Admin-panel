import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Base } from '../../base/base.class';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends Base {
  @Input() ColumnDefs: any;
  @Input() RowData: any;
  @Input() IsColumnsToFit!: boolean;

  constructor(translate: TranslateService) {
    super(translate);
  }

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
