import {
    NgModule,
    Injectable,
} from '@angular/core';

import { RouterModule } from '@angular/router';

import { Application  } from './application';

import { Components } from './page/component';
import { Login } from './page/login';
import { FullPage } from './page/full-page';
import { Raw } from './page/raw';

import { Layout  } from './layout';


import { routes } from './routes';

import {
    CorifeusModule,
    SettingsService
} from 'corifeus-web';

import {
    CorifeusMaterialModule
} from '../../../src'

/***
 * NEVER USE A EXPORT * AS, NEED THE EXACT COMPONENT FOR INJECTABLE FUNCTION!!!!
 */

@NgModule({
    imports: [
        CorifeusModule,
        RouterModule.forRoot(routes),
        CorifeusMaterialModule,
    ],
    declarations: [
        Application,
        Layout,
        Components,
        Login,
        FullPage,
        Raw,
    ],
    providers: [
    ],
    bootstrap: [ Application ]
})
export class Module {

    constructor(
        private settings: SettingsService,
    ) {
        const json = require('../json/settings.core.json');
        settings.extend('core', json);
    }
};
