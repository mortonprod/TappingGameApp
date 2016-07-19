///Where the magic happens.
///The app components specifies the title sequence to child components.
///This will be ended if hideTitle event is fired from one of the child components.
import {TapGrid} from './grid';
import {TapTitle} from './title';


import {Component} from '@angular/core';
@Component({
    selector: 'tap-app',
    templateUrl: '../MyStaticFiles/app.html',
    directives: [TapGrid,TapTitle]

})
export class App {
    isTitle: boolean = true;
    got: number = 0;
    missed:number =0
    public hideTitle() {
        this.isTitle = false;
    }
    public tapped(event) {
        this.got = event[0];
        this.missed = event[1];
    }
}
