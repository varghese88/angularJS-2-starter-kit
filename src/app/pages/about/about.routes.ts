import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutHomeComponent } from './home/abouthome.component';
import { AboutItemComponent } from './item/aboutitem.component';
import { FirstItemComponent } from './item/first.component';
import { SecondItemComponent } from './item/second.component';

export const routes:Routes = [
  {
    path:"about",
    component:AboutComponent,
    children:[
      {path:'',component:AboutHomeComponent},
      {
        path:'item',component:AboutItemComponent,
        children:[
          {path:'',component:FirstItemComponent},
          {path:'second',component:SecondItemComponent}
        ]
      }
    ]
  }
];

export const componentList:any = [AboutComponent,AboutHomeComponent,AboutItemComponent,FirstItemComponent,SecondItemComponent];

