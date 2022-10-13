import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatsComponent } from './stats/stats.component';
import { AlbumComponent } from './album/album.component';


@NgModule({
  declarations: [
    StatsComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
