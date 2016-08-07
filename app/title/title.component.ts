import {Component, Output, Input, style} from '@angular/core';
@Component({
    selector: "tap-title",
    templateUrl: './title.template.html',
    styleUrls: ['./title.style.css']
})
export class TapTitle {
    line1: string = "A world of tappers";
    line2: string = "Where do we go from here...";
    line3: string = "Taps aff!";
    expose1: boolean = false;
    expose2: boolean = false;
    expose3: boolean = false;
    isBlink: boolean = false;
    constructor(){
        setTimeout(() => {
            this.expose1 = true;
        }, 1000);
        setTimeout(() => {
            this.expose2 = true;
        }, 2000);
        setTimeout(() => {
            this.expose3 = true;
        }, 3000);
        setTimeout(() => {
            this.expose1 = false;
            this.expose2 = false;
            this.expose3 = false;
        }, 7000);
        setTimeout(() => {
            this.line2 = "Play"
            this.expose2 = true;
            this.isBlink = true;
        }, 8000);
    }
}
