import {
    Component,
    Input,
} from '@angular/core';

import {
    MenuPositionX,
    MenuPositionY

} from '@angular/material'

import {
    LocaleService, SettingsService, LocaleSubject,
    MediaQueryService, MediaQuerySettingType, MediaQuerySetting
} from "corifeus-web";

// requires to be in a md-menu
@Component({
    selector: 'cory-mat-translation-button',
    template: `

<md-menu x-position="before"  #menuTranslate="mdMenu">
<cory-mat-translation-menu></cory-mat-translation-menu>
</md-menu>

<button  [color]="color" md-button [mdMenuTriggerFor]="menuTranslate" [mdTooltip]="tooltip"  [mdTooltipPosition]="mdTooltipPosition">
<md-icon>language</md-icon>
<span class="cory-mat-hide-xsmall">
    {{ i18n.material.title.language }}
</span>
</button>

`,
})
export class TranslationButton {

    @Input('color')
    color: string = 'default';

    @Input('cory-tooltip-position')
    mdTooltipPosition: string  = 'left';

    i18n: any;

    settings: any;

    tooltip: string;

    currentWidthAlias: string;

    constructor(
        protected locale: LocaleService,
        protected settingsAll: SettingsService,
        private mediaQuery: MediaQueryService
    ) {
        this.settings = settingsAll.data.material;

        this.locale.subscribe((data: LocaleSubject) => {
            this.i18n = data.locale.data;
            this.setTooltip();
        });

        this.mediaQuery.register([
            <MediaQuerySetting>{
                name: 'small',
                min: 0,
                max: 599,
                type: MediaQuerySettingType.Width
            },
            <MediaQuerySetting>{
                name: 'large',
                min: 600,
                max: Infinity,
                type: MediaQuerySettingType.Width
            }
        ])

        this.mediaQuery.subscribe((settings : MediaQuerySetting[]) => {
            settings.forEach((setting) => this.setTooltip(setting.name))
        })
    }

    private setTooltip(alias?: string) {
        if (alias !== undefined) {
            this.currentWidthAlias= alias;
        }
        switch (this.currentWidthAlias) {
            case 'small':
                this.tooltip = this.locale.data.material.title.language;

                break;

            default:
                this.tooltip = undefined;
                break;
        }
    }




}
