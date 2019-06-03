import {
    Injectable,
    Inject,

} from '@angular/core';

require('@fortawesome/fontawesome-free/js/all')


import {
    log
} from './index';
import {
    ThemeService,
} from './services/theme';

import {
    SettingsService,
    LocaleService
} from 'corifeus-web';

@Injectable()
export class Boot {

    constructor(
        private settings : SettingsService,
        private locale: LocaleService,
        private theme: ThemeService,
    ) {
        log('booted');


        const module = 'material';
        settings.register(module, require('./json/settings.json'));

        locale.register(module, {
            en: require('./json/translation/english.json'),
            hu: require('./json/translation/hungarian.json'),
        });

        this.theme.boot();

        //TODO uglify breaks CSS imports
        //FIXME material icons, roboto, font-awesome
//      @import url(https://fonts.googleapis.com/css?family=Roboto);
//      @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
//      @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
/*
        const css = `
        `;
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');

        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
*/
    }

}