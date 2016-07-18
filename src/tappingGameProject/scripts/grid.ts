///The grid is composed of tap-sqr components.
///Should implementthe composite design pattern.

import {Output,Component, OnInit, OnDestroy} from '@angular/core';
import {TapSqr} from './sqr';

@Component({
    selector: "tap-grid",
    directives:[TapSqr],
    templateUrl: '../MyStaticFiles/grid.html'
})
///Always implement class with some basic angular functionality.
export class TapGrid implements OnInit, OnDestroy {
    ///If in title sequence then we want to run some default animation in the background.
    isTitleGrid: boolean = false;
    isTitle: Array<boolean> = new Array();
    ngOnInit() { }
    ngOnDestroy() {  }
    constructor() {
        for (let i: number = 0; i < 17; i++) {
            this.isTitle.push(false);
        }
        setTimeout(() => {
            this.isTitle[0] = true;
            this.isTitle[1] = true;
            this.isTitle[2] = true;
            this.isTitle[3] = true;
        }, 2000);
        setTimeout(() => {
            this.isTitle[4] = true;
            this.isTitle[5] = true;
            this.isTitle[6] = true;
            this.isTitle[7] = true;
        }, 3000);
        setTimeout(() => {
            this.isTitle[8] = true;
            this.isTitle[9] = true;
            this.isTitle[10] = true;
            this.isTitle[11] = true;
        }, 4000);
        setTimeout(() => {
            this.isTitle[12] = true;
            this.isTitle[13] = true;
            this.isTitle[14] = true;
            this.isTitle[15] = true;
        }, 5000);
    }
    public sqrTapped() {
        for (let i: number = 0; i < 17; i++) {
            this.isTitle[i] = false;
        }
    }
}