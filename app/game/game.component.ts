import { Component } from '@angular/core';
import { TapGrid } from './grid'

 @Component({
    selector: "tap-game",
    directives: [TapGrid],
    templateUrl:'./game.template.html'
})

 export class TapGame {
     constructor() {
     }
}
