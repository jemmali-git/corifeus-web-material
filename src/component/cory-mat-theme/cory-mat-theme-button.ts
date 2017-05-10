import {
    Component,
    Input,
} from '@angular/core';

import {
    LocaleService, SettingsService, LocaleSubject,
    MediaQueryService, MediaQuerySettingType, MediaQuerySetting
} from "corifeus-web";

// requires to be in a md-menu
@Component({
    selector: 'cory-mat-theme-button',
    template: `

        <md-menu x-position="before" #menuTheme="mdMenu">
            <cory-mat-theme-menu></cory-mat-theme-menu>
        </md-menu>

        <button [color]="color" #buttonTheme md-button [mdMenuTriggerFor]="menuTheme" [mdTooltip]="tooltip" [mdTooltipPosition]="mdTooltipPosition">
            <md-icon>color_lens</md-icon>
            <span class="cory-mat-hide-xsmall">
            {{ i18n.material.title.theme }}
            </span>
        </button>
`,
})
export class ThemeButton {

    @Input('cory-tooltip-position')
    mdTooltipPosition: string = "left";

    @Input('color')
    color: string = 'default';;


    i18n: any;

    settings: any;

    tooltip: string ;

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
                this.tooltip = this.locale.data.material.title.theme;

                break;

            default:
                this.tooltip = undefined;
                break;
        }
    }




}