import {
    Component,
    Inject,
    forwardRef,
} from '@angular/core';

import {
    LocaleService, SettingsService, LocaleSubject
} from "corifeus-web";

import {
    NotifyService
} from '../../services/notify/notify';


// requires to be in a md-menu
@Component({
    selector: 'cory-mat-translation-menu',
    template: `
     <button md-menu-item disabled>
                {{ i18n.material.title.language }}
            </button>
            <button
                    md-menu-item *ngFor="let translation of settings.translations.language | coryKeys"
                    (click)="clickChangeTranslate(translation)"
                    [class.cory-mat-menu-item-active]="translation == locale.current"
            >
                {{ settings.translations.language[translation] }}
            </button>
`,
})
export class TranslationMenu {

    i18n: any;

    settings: any;

    constructor(
        @Inject(forwardRef(() => NotifyService))  private notify: NotifyService,
        protected locale: LocaleService,
        protected settingsAll: SettingsService
    ) {
        this.settings = settingsAll.data.core;

        this.locale.subscribe((data: LocaleSubject) => {
            this.i18n = data.locale.data;
        });
    }

    public clickChangeTranslate(translation: string) {
        try {
            this.locale.setTranslation(translation);
            this.notify.info(this.settingsAll.data.core.translations.display[translation]);
        } catch(e) {
            console.error(e);
        }
    }

}