import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path: '', component: StatsComponent, pathMatch: 'full'},
  {path: 'album', component: AlbumComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
