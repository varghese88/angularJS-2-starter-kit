import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector:'about-item',
    template:`
        <h1>about item = {{id}}</h1>
        <a [routerLink]="['/about/item']">first</a>
        <a [routerLink] ="['/about/item/second']">second</a>
        
        <div class="inner-outlet">
            <router-outlet></router-outlet>
        </div>
    `
})

export class AboutItemComponent{
    private id:any;
    private paramSubscriber:any;
    private queryParamSubscriber:any;

    constructor(private activatedRoute:ActivatedRoute){
    }
    ngOnInit(){
        this.paramSubscriber = this.activatedRoute.params.subscribe((params)=>{this.id = params['id']});
        this.queryParamSubscriber = this.activatedRoute.queryParams.subscribe((queryParam:any)=>{this.id=queryParam['id'];})
    }
    ngOnDestroy(){
        this.paramSubscriber.unsubscribe();
        this.queryParamSubscriber.unsubscribe();
    }

}