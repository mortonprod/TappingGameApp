//This is the base components so will update own style and send output event to app components further up the dom hierarchy.
//Call animations via trigger in code like @sqrState
//Animation states define the end state. The transition defines how you should move from one state to another given a change.
import {Component,Output,Input,style,EventEmitter} from '@angular/core';
@Component({
    selector: "tap-sqr",
    templateUrl: '../MyStaticFiles/sqr.html',
    styleUrls: ['../css/sqr.css']
})
export class TapSqr {
    @Output() tapped = new EventEmitter(); 
    @Input() isTitle: boolean = false;
    isInitial: boolean = true;
    isClicked: boolean = false;
    ///On click call the event tapped with next and pass variables through this
    onClick() {
        this.isClicked = true;
        setTimeout(() => {
            this.isClicked = false;
        }, 2000);
        console.log("clicked");
        this.tapped.next(["variables","something else"]);
    }
}
