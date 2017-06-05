import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector:'about-home',
    template:`
        <h1>about home</h1> 
        <button (click)="goTo('item')">goto</button>
    `
})

export class AboutHomeComponent{
    constructor( private router: Router, private route: ActivatedRoute ){

    }
    goTo(state:String){
        this.router.navigate([state],{relativeTo:this.route,queryParams:{id:3}});
    }
}