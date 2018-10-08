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

import {
    /*
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    */
//    OverlayContainer,
//    MatSelectionList,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,

} from '@angular/material';

/***
 * NEVER USE A EXPORT * AS, NEED THE EXACT COMPONENT FOR INJECTABLE FUNCTION!!!!
 */

@NgModule({
    imports: [
        /*
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatCommonModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatLineModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatOptionModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSliderModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule,
//        OverlayContainer,
//        MatSelectionList,
        // material modules
        */
        MatSidenavModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,


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
