import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './component/breadcrumb/breadcrumb.service';
import { ZTreeComponent } from './component/z-tree/z-tree.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    HttpModule
  ],
  exports:[
    CommonModule,
    HttpModule,
    FormsModule,ReactiveFormsModule,
    BreadcrumbComponent,
    ZTreeComponent
  ],
  declarations: [BreadcrumbComponent, ZTreeComponent],
  providers: [BreadcrumbService],
  entryComponents:[]
})
export class ShareModule {}
