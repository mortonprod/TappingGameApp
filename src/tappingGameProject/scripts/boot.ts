import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {App} from './app';
//import {TapGrid} from './grid';

//bootstrap(TapGrid);
bootstrap(App, [
    disableDeprecatedForms(),
    provideForms()
]);
//bootstrap(App);

console.log("boot loading");