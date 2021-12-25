import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from '../components';
import { MaterialModule } from './material.module';
import { MultiLangModule } from './multilang.module';

@NgModule({
  declarations: [GridComponent],
  imports: [MaterialModule, AgGridModule, MultiLangModule],
  exports: [MaterialModule, GridComponent, MultiLangModule],
  providers: []
})
export class SheardModule {}
