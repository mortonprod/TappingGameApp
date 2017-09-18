import {Component, ViewChildren,QueryList,EventEmitter} from '@angular/core';
import {TapSqr} from './sqr';
@Component({
    selector: "tap-grid",
    templateUrl: './grid.template.html'
})
export class TapGrid{
    missedSqrs = Array<number>();
    gotSqrs = Array<number>();
    fireNum = 5;
    fireTime = 3000;
    @ViewChildren(TapSqr) sqrList: QueryList<TapSqr>;
    constructor() {
    }
    ngAfterViewInit() {
        setInterval(() => {
            for (let i = 0; i < this.fireNum; i++) {
                let rand: number = Math.floor(Math.random() * this.sqrList.toArray().length)
                if (this.missedSqrs.indexOf(rand) > -1) {
                    this.sqrList.toArray()[rand].beginCountDown(rand);
                } else {
                    i--;
                }
            }
        }, this.fireTime)
    }
    gotIt(event) {
        this.gotSqrs.push(event[0])
    }
    missed(event) {
        this.missedSqrs.push(event[0]);
    }
}
