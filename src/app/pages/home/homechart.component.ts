import { Component,Input,Output, EventEmitter, ElementRef,ViewChild} from '@angular/core';
import { HomeService} from './home.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';

@Component({
    selector:'home-chart',
    template:`
        <div *ngFor = "let obj of reponseObj; let i=index">
            <span>{{obj.id}}</span>=><span>{{obj.name}}</span>=><span>{{obj.mailId}}</span>
        </div>
        <button (click)="increment()">{{count}}</button>
        <button (click)="decrement()">{{count}}</button>
        <button #observeButton>observe</button>
    `,
    providers:[HomeService]
})
//         <bar-chart style="height:100%;display:block"></bar-chart>
export class HomeChartComponent {
    @Input('count') count:any;
    @Output() fireCountValue:EventEmitter<any> = new EventEmitter();

    @ViewChild('observeButton') observeBtn:ElementRef;

    private reponseObj:any;
    constructor(private homeService:HomeService,private element:ElementRef){

    }

    ngOnInit(){
        document.querySelector
        this.homeService.getData().subscribe(data=>{
            console.log(data);
            //this.reponseObj = data;
        });
        this.homeService.setData({title: 'foo',body: 'bar',userId: 1}).subscribe(data=>{
            console.log(data);
            //this.reponseObj = data;
        });

        let btnObserver =  Observable.fromEvent(this.observeBtn.nativeElement,'click');
        btnObserver.subscribe((e)=>{console.log('clicked');},(err)=>{console.log('err');},()=>{console.log('completed');})
    }
    ngAfterViewInit(){
        console.log(this.observeBtn.nativeElement);
    }
    increment(){
        this.count++;
        this.fireCountValue.emit(this.count);
    }

    decrement(){
        this.count--;
        this.fireCountValue.emit(this.count);
    }


}