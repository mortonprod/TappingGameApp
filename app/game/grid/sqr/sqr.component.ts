import {Component, Output,EventEmitter} from '@angular/core';
@Component({
    selector: "tap-sqr",
    templateUrl: './sqr.template.html',
    styleUrls: ['./sqr.style.css']
})
export class TapSqr{
    timeout: any;
    timeToInitial: number = 1000;
    timeToMissed: number = 5000;
    state = "";
    id:number;
    @Output() missed = new EventEmitter();
    @Output() gotIt = new EventEmitter();
    /// @function TapSqr.beginCountDown
    /// This will begin countdown. A user must tap the sqr in the time allocated. If no tap in time allocated then fire
    /// missed event to grid. This will be stored in the grid to rule out this sqr from future calls.
    /// @param {number} The id of this sqr from the grid.
    beginCountDown(id) {
        this.id = id;
        this.state = "toBeClicked";
        this.timeout = setTimeout(() => {
            this.state = "missed";
            this.missed.next([id]);
        }, this.timeToMissed)

    }
    /// @function tapSqr.onClick
    /// If we need to click this sqr then cancel missed timeout and fire gotIt event. This will let the grid component know
    /// we have got to this sqr in time. If we hit a sqr not to hit then let the user know my another change in style.
    onClick() {
        if (this.state === "toBeClicked") {
            clearTimeout(this.timeout);
            this.state = "clicked";
            this.gotIt.next([this.id]);
            setTimeout(() => {
                this.state = "";
            }, this.timeToInitial)
        } else {
            this.state = "nonClick";
            setTimeout(() => {
                this.state = "";
            }, this.timeToInitial)
        }
    }
}
