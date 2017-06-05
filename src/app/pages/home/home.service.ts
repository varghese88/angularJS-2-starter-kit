import {Injectable} from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable()

export class HomeService{
    constructor(private http:Http) {
        
    }
    getAppTitle(){
        return [
            {id:1,name:'Varghese',mailId:'varg@gmail.com'},
            {id:2,name:'sanya',mailId:'sanya@gmail.com'},
            {id:3,name:'issac',mailId:'issac@gmail.com'},
            {id:3,name:'anitha',mailId:'anitha@gmail.com'}
        ];
    }

    getData(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map((response: Response) => response.json());
    }

    setData(inputReq:any){
        return this.http.post('https://jsonplaceholder.typicode.com/posts',inputReq)
            .map((response: Response) => response.json());
    }
}