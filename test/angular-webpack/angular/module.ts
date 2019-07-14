
import {
    NgModule,
    Injectable,
} from '@angular/core';

import {RouterModule} from '@angular/router';

import {Application} from './application';

import {Components} from './page/component';
import {Login} from './page/login';
import {FullPage} from './page/full-page';
import {Raw} from './page/raw';

import {Layout} from './layout';
import {Login as LoginComponent} from './component/cory-mat-login/cory-mat-login'


import {routes} from './routes';

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
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule,} from '@angular/material/input'
import {MatCheckboxModule,} from '@angular/material/checkbox'

import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {
    FormsModule, ReactiveFormsModule
} from '@angular/forms';

/***
 * NEVER USE A EXPORT * AS, NEED THE EXACT COMPONENT FOR INJECTABLE FUNCTION!!!!
 */

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatInputModule,
        MatCheckboxModule,

        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule, MatDividerModule,

        CorifeusModule,
        RouterModule.forRoot(routes),
        CorifeusMaterialModule,
    ],
    declarations: [
        Login,
        LoginComponent,
        Application,
        Layout,
        Components,
        FullPage,
        Raw,
    ],
    providers: [],
    bootstrap: [Application]
})
export class Module {

    constructor(
        private settings: SettingsService,
    ) {
        const json = require('../json/settings.core.json');
        settings.extend('core', json);
    }
};
