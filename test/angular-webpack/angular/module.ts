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

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

/***
 * NEVER USE A EXPORT * AS, NEED THE EXACT COMPONENT FOR INJECTABLE FUNCTION!!!!
 */

@NgModule({
    imports: [

        MatSidenavModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule, MatDividerModule,

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
