///Where the magic happens.
///The app components specifies the title sequence to child components.
///This will be ended if hideTitle event is fired from one of the child components.
import {TapGrid} from './grid';
import {TapTitle} from './title';
import {TapInfo} from './info';



import {Component} from '@angular/core';
@Component({
    selector: 'app',
    templateUrl: '../MyStaticFiles/app.html',
    directives: [TapGrid,TapTitle,TapInfo]

})
export class App {
    isTitle: boolean = true;
    got: number = 0;
    missed: number = 0;
    public hideTitle() {
        this.isTitle = false;
    }
    public tapped(event) {
        this.got = event[0];
        this.missed = event[1];
        console.log("got and missed: " + this.got + " " + this.missed );
    }
}
