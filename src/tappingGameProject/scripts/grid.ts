///The grid deals with specifying which blocks to fire.
import {Output, Component, OnInit, OnDestroy, EventEmitter, Input, SimpleChange} from '@angular/core';
import {TapSqr} from './sqr';
import {TapStatements} from './statements';


@Component({
    selector: "tap-grid",
    directives: [TapSqr, TapStatements],
    templateUrl: '../MyStaticFiles/grid.html'
})
///Always implement class with some basic angular functionality.
export class TapGrid implements OnInit, OnDestroy {
    @Input() isTitle: boolean = true;
    @Output() tapped = new EventEmitter();
    states: Array<string> = new Array();
    statementState: string = "initial";
    isStatement: boolean = false;
    missed: number = 0;
    got: number = 0;
    time: number = 2000;
    fireNum: number = 2;
    ngOnInit() { }
    ngOnDestroy() {  }
    constructor() {
        for (let i = 0; i < 17; i++) {
            this.states.push("initial");
            console.log("state: " + this.states[i]);
        }
    }
    ngOnChanges(changes: { [isTitle: string]: SimpleChange }) {
        if (!this.isTitle) {
            setInterval(() => {
                for (let i = 0; i < this.fireNum; i++) {
                    this.states[Math.floor(Math.random() * this.states.length)] = "toBeClicked";
                }
                console.log("Fire loop");
            }, 2000)
        }
    }


    ///Logic to deal with 
    public sqrTapped(event) {
        if (event[0] == "missed") {
            this.missed = this.missed + 1;
            console.log("Missed: " + this.missed);
        } 
        if (event[0] == "gotIt") {
            this.got = this.got + 1;
            console.log("Got: " + this.got);
        } 
        if (this.missed > 5) {
            this.isStatement= true;
            this.statementState = "missed";
            setTimeout(() => {
                this.isStatement = false;
            }, this.time)
        }
        if (this.got > 5) {
            this.isStatement = true;
            this.statementState = "gotIt";
            setTimeout(() => {
                this.isStatement = false;
            }, this.time)
        }
        ///Pass got and missed to application. 
        this.tapped.next([this.got,this.missed]);
    }
    ///We call a function constantly from the grid class to fire the sqrs below.
    private loop() {
        for (let i = 0; i < this.fireNum; i++) {
            this.states[Math.floor(Math.random() * this.states.length)] = "isToBeClicked";
        }
        console.log("Fire loop");
        setTimeout(this.loop, this.time);
    };
}