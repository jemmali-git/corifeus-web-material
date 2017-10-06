import {
    Component,
    Inject,
    forwardRef,
} from '@angular/core';

import {
    LocaleService, SettingsService, LocaleSubject
} from "corifeus-web";

import {
    ThemeService
} from '../../services/theme';

import {
    NotifyService
} from '../../services/notify/notify';

const template = require('lodash/template');

// requires to be in a mat-menu
@Component({
    selector: 'cory-mat-theme-menu',
    template: `
    <button mat-menu-item disabled>
        {{ i18n.title.theme }}
    </button>
    <button mat-menu-item
            *ngFor="let thisTheme of settings.themes.material"
            (click)="this.clickChangeTheme(thisTheme)"
            [class.cory-mat-menu-item-active]="thisTheme == theme.current"
    >
        {{ i18n.themes.material[thisTheme] }}
    </button>
`,
})
export class ThemeMenu {

    i18n: any;

    settings: any;

    constructor(
        @Inject(forwardRef(() => NotifyService))  private notify: NotifyService,
        @Inject(forwardRef(() => ThemeService))  private theme: ThemeService,
        protected locale: LocaleService,
        protected settingsAll: SettingsService
    ) {
        this.settings = settingsAll.data.material;

        this.locale.subscribe((data: LocaleSubject) => {
            this.i18n = data.locale.data.material;
        });
    }

    public clickChangeTheme(theme: string) {

        try {
            const oldTheme = this.theme.current;
            this.theme.setTheme(theme)
            const parameters = ({
                old: this.i18n.themes.material[oldTheme],
                'current': this.i18n.themes.material[theme]
            });
            const templateFactory = template(this.i18n.message.theme.changed);
            this.notify.info(templateFactory(parameters));
        } catch(e) {
            this.notify.error(e);
        }
    }


}