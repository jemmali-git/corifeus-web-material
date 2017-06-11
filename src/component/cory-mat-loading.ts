import {
    Input,
    Component,
} from '@angular/core';

import { Http } from '@angular/http';

@Component({
        selector: 'cory-mat-loading',
        template: `
<md-progress-bar
style="position: fixed; top: 0px; left: 0px; width: 100%; z-index: 100000;"
*ngIf="visible || requestCount > 0"
color="primary"
mode="indeterminate"></md-progress-bar>
`,
    })
export class Loading {

    @Input('cory-visible')
    visible: boolean = false;

    get requestCount() {
        return window.corifeus.core.http.counter;
    }

    constructor(public http: Http) {
     //   console.log(this.visible);
    }
}