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
    }

}