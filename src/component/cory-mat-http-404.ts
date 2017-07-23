import {
    Component,
} from '@angular/core';


import { State, LocaleService, LocaleSubject } from 'corifeus-web';

@Component({
    selector: 'cory-mat-http-404',
    template: `
<div style="margin-top: 20px; font-size: 6em; opacity: 0.25;">
    404
</div>
    <div style="font-size: 3em; opacity: 0.75;">
    {{ i18n.material.http['404'] }}
    </div>
    <div style="text-overflow: ellipsis; overflow: hidden;">
    {{ url }}
    </div>
`,
})
export class Http404 {

    url: string;
    i18n: any;

    constructor(
        public locale: LocaleService

    ) {

        history.replaceState({} , State.RequestPath , State.RequestPath);

        const its404 = () => {
            State.NotFound = true;
            window.corifeus.core.http.status = 404;
        }

        let maxWait = 10000;
        let waiter = 0;
        const letKeep404 = setInterval(() => {
            its404();
            if (window.corifeus.core.http.counter === 0) {
                waiter++;
                if (waiter > 10) {
                   clearInterval(letKeep404);
                }
            }
        }, 100)

        setTimeout(() => {
            clearInterval(letKeep404);
            its404();
        }, maxWait);

        this.locale.subscribe((data: LocaleSubject) => {
            this.i18n = data.locale.data;
        });

        this.url = State.RequestPath
    }
}