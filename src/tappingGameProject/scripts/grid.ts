///The grid will deal with sqr logic and statement rendering over the screen.
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
    ngOnDestroy() { }
    ///Set initial states of blocks
    constructor() {
        for (let i = 0; i < 17; i++) {
            this.states.push("initial");
            console.log("state: " + this.states[i]);
        }
    }
    ///If the title sequence is done then begin the loop to fire the squares.
    ngOnChanges(changes: { [isTitle: string]: SimpleChange }) {
        if (!this.isTitle) {
            setInterval(() => {
                for (let i = 0; i < this.fireNum; i++) {
                    let rand: number = Math.floor(Math.random() * this.states.length)
                    this.states[rand] = "toBeClicked";
                    console.log("Select " + rand);
                }
                console.log("Fire loop");
            }, 2000)
        }
    }
    ///If you pick a sqr which is missed then re run the match until you find one which will not send an error
    public reSelect(event) {
        let rand: number = Math.floor(Math.random() * this.states.length)
        this.states[rand] = "toBeClicked";
        console.log("Reselect " + rand);
    }
    ///Logic to calculate statements which need to be rendered and passed to the application. 
    public sqrTapped(event) {
        this.countHits(event);
        this.showStatement();
        this.tapped.next([this.got,this.missed]);
    }
    private countHits(event) {
        if (event[0] == "missed") {
            this.missed = this.missed + 1;
            console.log("Missed: " + this.missed);
        }
        if (event[0] == "gotIt") {
            this.got = this.got + 1;
            console.log("Got: " + this.got);
        } 
    }
    private showStatement() {
        if (this.missed % 5 === 0 && this.missed !== 0) {
            this.isStatement = true;
            this.statementState = "missed";
            setTimeout(() => {
                this.isStatement = false;
            }, this.time)
        }
        if (this.got % 5 === 0 && this.got !== 0  ) {
            this.isStatement = true;
            this.statementState = "gotIt";
            setTimeout(() => {
                this.isStatement = false;
            }, this.time)
        }

    }
}