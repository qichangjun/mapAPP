import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from "ag-grid-angular/main";
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './component/breadcrumb/breadcrumb.service';
import { ZTreeComponent } from './component/z-tree/z-tree.component';
import { AgGridComponent } from './component/ag-grid/ag-grid.component';
import {
  MatMenuModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpModule,
    AgGridModule.withComponents([])
  ],
  exports:[
    CommonModule,
    HttpModule,
    FormsModule,ReactiveFormsModule,
    BreadcrumbComponent,
    ZTreeComponent,
    AgGridComponent
  ],
  declarations: [BreadcrumbComponent, ZTreeComponent, AgGridComponent],
  providers: [BreadcrumbService],
  entryComponents:[]
})
export class ShareModule {}
