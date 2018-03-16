import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecordComponent } from './record/record.component';
const routes:Routes = [
  { path:'',redirectTo:'map',pathMatch:'full'},  
  { path:'map',component:EsriMapComponent},
  { path:'record',component:RecordComponent},
  { path:'404',component:NotFoundComponent},
  { path:'**',redirectTo:'404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRouteModule {}
