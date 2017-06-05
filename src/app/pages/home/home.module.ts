
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeChartComponent} from './homechart.component'
import { BarChart } from '../../components/chart/barchart.component'

const routes:Routes = [
  {
    path:"home",
    component:HomeComponent
  }
];

const componentList:any = [HomeComponent,HomeChartComponent,BarChart];


@NgModule({
  imports: [FormsModule,BrowserModule,RouterModule.forChild(routes)],
  declarations: [componentList]
})
export class HomeModule { }
