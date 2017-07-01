import {
    Injectable,
    Inject,
    forwardRef
} from '@angular/core';


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
        @Inject(forwardRef(() => ThemeService))  private theme: ThemeService,
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
        const css = `
        @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
        @import url(https://fonts.googleapis.com/css?family=Roboto);    
        @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
        `;
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');

        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    }

}