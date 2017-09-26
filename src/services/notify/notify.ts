import {
    Injectable,
} from '@angular/core';

import {
    Response
} from '@angular/http'

import {
    isDevMode
} from '@angular/core';

import {MdSnackBar, MdSnackBarConfig} from '@angular/material';

import { LocaleService, LocaleSubject } from 'corifeus-web';


import { NotifyComponent } from './notify-component'

const duration = isDevMode() ? 50000 : 3000;

export interface NotifyOptions {
    icon: string,
}


@Injectable()
export class NotifyService  {

    i18n : any;

    constructor(
        private snackBar: MdSnackBar,
        private locale: LocaleService,
    ) {

        this.locale.subscribe((subject : LocaleSubject) => {
            this.i18n = subject.locale.data.material;
        });
    }

    info(message: string, coryOptions?: NotifyOptions|string, config? : MdSnackBarConfig) {
        if (config === undefined) {
            config = <MdSnackBarConfig>{
                duration: duration
            }
        }
        if (typeof(coryOptions) === 'string') {
            coryOptions = <NotifyOptions>{
                icon: coryOptions
            }
        }
        if (coryOptions === undefined) {
            coryOptions = <NotifyOptions>{
                icon: 'info'
            }
        }
        config.data = config.data || {};
        config.data.message = message;
        config.data.options = coryOptions;
        const snackBar = this.snackBar.openFromComponent(NotifyComponent, config);
    }

    error(error: Error|Response) {

        if (error instanceof Error) {
            this.info(`${error.message}`, <NotifyOptions>{
                icon: 'error'
            });
        } else if (error instanceof Response) {
            const message = error.json().message;
            this.info(`${this.i18n.message[message]}`, <NotifyOptions>{
                icon: 'error'
            });
        }

        console.error(error);
    }

}
