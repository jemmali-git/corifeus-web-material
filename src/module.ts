import { NgModule, ModuleWithProviders } from '@angular/core';
import { CorifeusModule }  from 'corifeus-web';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCommonModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdLineModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdOptionModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectionModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
} from '@angular/material';

import { Boot } from './boot';

import { ThemeService } from './services/theme'

import { NotifyService } from './services/notify/notify'
import { NotifyComponent } from './services/notify/notify-component'

import { Http404 } from './component/cory-mat-http-404'
import { Loading } from './component/cory-mat-loading'
import { Login } from './component/cory-mat-login/cory-mat-login'


import { ThemeButton } from './component/cory-mat-theme/cory-mat-theme-button'
import { ThemeMenu } from './component/cory-mat-theme/cory-mat-theme-menu'

import { TranslationButton } from './component/cory-mat-translation/cory-mat-translation-button'
import { TranslationMenu } from './component/cory-mat-translation/cory-mat-translation-menu'

/*
 fix: allow users to disable the sanity checks
 @NgModule({
 providers: [
 {provide: MATERIAL_SANITY_CHECKS, useValue: false}
 ]

 // other config
 });

 https://github.com/angular/material2/issues/4125
 */
// https://github.com/angular/material2/pull/4178

// exports = component


/***
 * NEVER USE A EXPORT * AS, NEED THE EXACT COMPONENT FOR INJECTABLE FUNCTION!!!!
 */

const materialModules = [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCommonModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdLineModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdOptionModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectionModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
]

@NgModule({
    imports: [
        CorifeusModule,
        BrowserAnimationsModule,

        // material
        MdAutocompleteModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdChipsModule,
        MdCommonModule,
        MdCoreModule,
        MdDatepickerModule,
        MdDialogModule,
        MdExpansionModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdLineModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdOptionModule,
        MdPaginatorModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdRippleModule,
        MdSelectionModule,
        MdSelectModule,
        MdSidenavModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdSortModule,
        MdTableModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
        // material modules

    ],
    declarations: [
        NotifyComponent,
        Loading,

        ThemeMenu,
        ThemeButton,

        TranslationMenu,
        TranslationButton,

        Http404,
        Login,

    ],

    // do not need export providers
    providers: [
        Boot,
        ThemeService,
        NotifyService,

    ],
    exports: [
        CorifeusModule,
        BrowserAnimationsModule,

        // material modules
        MdAutocompleteModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdChipsModule,
        MdCommonModule,
        MdCoreModule,
        MdDatepickerModule,
        MdDialogModule,
        MdExpansionModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdLineModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdOptionModule,
        MdPaginatorModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdRippleModule,
        MdSelectionModule,
        MdSelectModule,
        MdSidenavModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdSortModule,
        MdTableModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
        // material modules

        Loading,

        ThemeMenu,
        ThemeButton,

        TranslationMenu,
        TranslationButton,

        Http404,

        Login,

    ],
    entryComponents: [
        NotifyComponent
    ]
})
export class CorifeusMaterialModule {

    constructor(boot : Boot) {}

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CorifeusMaterialModule ,
//            providers: providers,
        };
    }
}