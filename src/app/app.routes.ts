import { Routes } from '@angular/router';

export const routes : Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        loadChildren:"pages/home/home.module#HomeModule",
    },
    {
        path:'about',
        loadChildren:"pages/about/about.module#AboutModule",
    }
];

