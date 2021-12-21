import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { GridComponent } from '../components';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [GridComponent],
  imports: [MaterialModule, AgGridModule],
  exports: [MaterialModule, GridComponent],
  providers: [],
})
export class SheardModule {}
