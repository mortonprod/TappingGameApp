import { Component } from '@angular/core';
//import { TapGame } from './game';
//import {TapTitle} from './title';

@Component({
    selector: 'app',
    template: `
    <a [routerLink]="['/game']">game</a>
        <main>
            <router-outlet></router-outlet>
        </main>
    `,
    directives: []

})
export class App {
}
