///The grid deals with specifying which blocks to fire.
import {Input,Output, Component, OnInit, OnDestroy} from '@angular/core';


@Component({
    selector: "tap-info",
    templateUrl: '../MyStaticFiles/info.html',
    styleUrls: ['../css/info.css']
})
///Always implement class with some basic angular functionality.
export class TapInfo implements OnInit, OnDestroy {
    @Input() got: number = 0;
    @Input() missed: number = 0;
    ngOnInit() { }
    ngOnDestroy() { }
}