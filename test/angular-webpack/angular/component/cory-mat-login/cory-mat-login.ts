import {
    Component,
    Inject,

    OnInit,
    ViewChild,
    AfterViewChecked,
    ElementRef,
    NgZone,
} from '@angular/core';

import {
    NgForm
} from '@angular/forms'

import {
    LocaleService, SettingsService, LocaleSubject,
    AuthService
} from "corifeus-web";

import {
    NotifyService
} from '../../../../../src/services/notify/notify';

import {
    ThemeService
} from '../../../../../src/services/theme';


// requires to be in a mat-menu
@Component({
    selector: 'cory-mat-login',
    templateUrl: './cory-mat-login.html'
})
export class Login implements AfterViewChecked {

    loaded: boolean = false;

    i18n: any;

    settings: any;

    auto: boolean;

    @ViewChild('loginForm', {static: false})
    loginForm: NgForm;

    @ViewChild('inputUsername', {read: ElementRef, static: false})
    inputUsername: ElementRef;

    @ViewChild('elementForm', {read: ElementRef, static: false})
    elementForm: ElementRef;

    constructor(
        private notify: NotifyService,
        private theme: ThemeService,
        protected locale: LocaleService,
        protected settingsAll: SettingsService,
        private auth: AuthService,
        private zone: NgZone,
    ) {
        this.settings = settingsAll.data.material;

        this.locale.subscribe((data: LocaleSubject) => {
            this.i18n = data.locale.data.material;
        });
    }


    ngAfterViewChecked() {
        //this.inputUsername.nativeElement.focus();
    }

    async onSubmit() {
        try {
            this.elementForm.nativeElement.classList.remove('cory-shake')
            const info = await this.auth.login(this.loginForm.value);
            this.notify.info(this.i18n.message.loggedIn);
        } catch (e) {
            this.elementForm.nativeElement.classList.add('cory-shake')
            this.notify.info(this.i18n.message.unauthorized, 'error')
        } finally {
        }
    }

}
