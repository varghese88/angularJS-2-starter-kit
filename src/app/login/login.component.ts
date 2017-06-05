import { Component } from '@angular/core';

@Component({
    selector:"login",
    template:`
        <div class='login-container'>
            <div class='login-inner-container'>
                <label>username</label>
                <input type='text' />
                <label>password</label>
                <input type='password' />
                <button>login</button>
            </div>
        </div>
    `
})

export class LoginComponent{}