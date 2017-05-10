import {
    Component,
} from '@angular/core';

import { Http } from '@angular/http';

@Component({
        selector: 'cory-mat-loading',
        template: `
<md-progress-bar
style="position: fixed; top: 0px; left: 0px; width: 100%; z-index: 100000;"
*ngIf="requestCount > 0"
color="primary"
mode="indeterminate"></md-progress-bar>
`,
    })
export class Loading {

    get requestCount() {
        return window.corifeus.core.http.counter;
    }

    constructor(public http: Http) {
    }
}