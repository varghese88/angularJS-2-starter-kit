import { Component } from '@angular/core';

@Component({
    selector:'about',
    template:`<h2>About</h2>
      <a [routerLink]="['/about']">Home</a>
      <a [routerLink] ="['/about/item']"  [queryParams]="{id: 1,name:'itemView'}">item1</a>
      
      <div class="inner-outlet">
        <router-outlet></router-outlet>
      </div>`
})

export class AboutComponent{}