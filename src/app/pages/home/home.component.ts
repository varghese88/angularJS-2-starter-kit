import { Component, OnInit } from '@angular/core';
import {HomeChartComponent } from './homechart.component';
import {Router} from "@angular/router"
@Component({
    selector:'home',
    template:`<div>hello</div>
        <button (click)="onClickAbout()" >about</button>
        <form>
            First name:<br>
            <input [(ngModel)]="firstName" type="text" name="firstname"><br>
            Last name:<br>
            <input [(ngModel)]="lastName" type="text" name="lastname">
        </form>
        <p>{{firstName}} {{lastName}}</p>
        <button (click)='increment()'>{{initialCount}}</button>
        <home-chart [count]="initialCount" (fireCountValue)="counterValueChange($event)" style="width:200px;height:200px;display:block"></home-chart>
    `
})

export class HomeComponent implements OnInit{
    private firstName:String;
    private lastName:String;
    private initialCount:any = 0;
    constructor(private router:Router){

    }
    ngOnInit(){
        
    }
    increment(){
        this.initialCount++;
    }
    onClickAbout(){
        this.router.navigate(['about']);
    }
    counterValueChange(e:any){
        this.initialCount = e;
    }
}