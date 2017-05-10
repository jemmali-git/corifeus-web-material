import {
    Component,
    Injectable,
} from '@angular/core';

import * as ngRouter from '@angular/router';

import * as web from 'corifeus-web'

import * as project from '../../../src';

@Component({
    selector: 'cory-web-material-test-layout',
    templateUrl: './layout.html'
})
@Injectable()
export class Layout {

    i18n: any;

    type: string = 'full';

    constructor(
        public theme: project.ThemeService,
        private router: web.RouterService,
        private route: ngRouter.ActivatedRoute,
        public locale: web.LocaleService

    ) {
        this.locale.subscribe((subsciber : web.LocaleSubject) => {
            this.i18n = subsciber.locale.data;
        })

        if (this.route.firstChild === null) {
            router.navigateTop(['/full/components'])
        }

        this.router.events.subscribe((event) => {
            if (event instanceof ngRouter.NavigationEnd) {
                const navEvent = <ngRouter.NavigationEnd>event;
                switch(navEvent.url) {
                    case '/login':
                        this.type = 'raw';
                        break;

                    default:
                        this.type = 'full';

                }
            }
        });
    }

}