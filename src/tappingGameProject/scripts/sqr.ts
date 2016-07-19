///@file sqr.js 
///All information about business logic stored here. DOM hierarchy and styles given in sqr.html and sqr.css
import {Component, Output, Input, style, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
@Component({
    selector: "tap-sqr",
    templateUrl: '../MyStaticFiles/sqr.html',
    styleUrls: ['../css/sqr.css']
})
export class TapSqr implements OnChanges {
    ///Input to change the behaviour of the square.
    @Input() state: string = "Initial";
    ///Output is tapped event.
    @Output() tapped = new EventEmitter();
    @Output() error = new EventEmitter();
    timeToMissed: number = 5000;///TODO:Must match css
    timeToInitial: number = 1000;///TODO:Must match css
    baseStyle : string = "baseStyle";
    style: string = "initial";
    timeout: any;

    ///NOTE YOU DO NOT ADD THIS SINCE INPUT PARAMETER?? Strange??
    ///@function ngOnChanges
    ///Set timer to be clicked. If fired then send a missed event to grid component.
    ngOnChanges(changes: { [state: string]: SimpleChange }) {
        console.log("Why no work: " this.state + " " + this.style);
        if (this.state === "toBeClicked" && this.style !== "missed") {
            console.log("Make clickable");
            ///Start timer. If you reach the end then you need to send a missed event.
            this.style = "toBeClicked";
            this.timeout = setTimeout(() => {
                this.style = "missed"; 
                this.tapped.next(["missed"]);
            }, this.timeToMissed)
        }
        ///Return error if you are trying to change a square which is missed.
        if (this.style === "missed"){
            this.error.next(["error"]);
        }
    }
    ///@function onClick 
    ///Only send clicked events for blocks which should be clicked.
    ///Otherwise send a little shake to note you have made a mistake.
    onClick() {
        if (this.style !== "missed") {
            clearTimeout(this.timeout);
            if (this.style === "toBeClicked") {
                this.style = "clicked";
                this.tapped.next(["gotIt"]);
            } else {
                this.style = "nonClick";
            }
            setTimeout(() => {
                this.style = "initial";
            }, this.timeToInitial)
        }
    }
}
