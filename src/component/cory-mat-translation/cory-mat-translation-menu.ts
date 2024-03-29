import {
    Component,
    Inject,
} from '@angular/core';

import {
    LocaleService, SettingsService, LocaleSubject
} from "corifeus-web";

import {
    NotifyService
} from '../../services/notify/notify';


// requires to be in a mat-menu
@Component({
    selector: 'cory-mat-translation-menu',
    template: `
     <button mat-menu-item disabled>
                {{ i18n.material.title.language }}
            </button>
            <div class="cory-mat-menu-divider"></div>
            <button
                    mat-menu-item *ngFor="let translation of translationKeys"
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
        private notify: NotifyService,
        public locale: LocaleService,
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
        } catch (e) {
            console.error(e);
        }
    }


    get translationKeys() {
        return Object.keys(this.settings.translations.language)
    }
}
