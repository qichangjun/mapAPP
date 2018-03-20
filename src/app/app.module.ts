import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Http,BaseRequestOptions,RequestOptions,Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { AppRouteModule } from './app-router/app-route.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecordComponent } from './record/record.component';
import { ShareModule } from './share/share.module';


@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    NotFoundComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
