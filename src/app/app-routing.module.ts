import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'materials', loadChildren: () => import('./modules/material/materials.module').then(mod => mod.MaterialsModule)},
    {path: 'map', loadChildren: () => import('./modules/map/map.module').then(mod => mod.MapModule)}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
