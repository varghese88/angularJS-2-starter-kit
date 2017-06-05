
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes, componentList }   from './about.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [componentList],
})
export class AboutModule { }
