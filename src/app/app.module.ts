import { NgModule } from '@angular/core';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { routes } from './app.routes';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HttpModule,
        AboutModule,
        HomeModule
    ],
    exports: [],
    declarations: [
        AppComponent
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }
