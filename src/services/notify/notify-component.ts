import {
    Injectable,
    Component,
    AfterViewInit,
    ViewChild,
    ElementRef,
    HostListener,
} from '@angular/core';

import { ThemeService } from '../theme'
import { ColorService } from 'corifeus-web'

import { NotifyOptions } from './notify'
import {MdSnackBarRef } from '@angular/material';

import { LocaleService, LocaleSubject } from 'corifeus-web';

@Component({

    template: `
        <div style="position: absolute;">
            <md-icon color="accent" #elementIcon>{{ options.icon }}</md-icon>
            <span class="message" [innerHTML]="message | coryHtml"></span>
        </div>
        <a md-button color="accent" #elementButton class="cory-mat-notify-button" (click)="ctx.dismiss()">{{ this.i18n.title.ok }}</a>

    `,

    styles: [`
        .message {
            position: relative;
            top: -7px;
        }

        [md-button]{
            position: absolute;
            top: 8px;
            right: 4px;
            min-width: auto !important;
        }
    `],
})
@Injectable()
export class NotifyComponent implements AfterViewInit {

    @ViewChild('elementButton', {read: ElementRef}) elementButton : ElementRef;
    @ViewChild('elementIcon', {read: ElementRef}) elementIcon : ElementRef;

    inited: boolean = false;

    message: string;
    options: NotifyOptions;
    i18n: any;
    ctx: MdSnackBarRef<NotifyComponent>;

    constructor(
        private locale: LocaleService,
        private theme: ThemeService,
        private color: ColorService,
    ) {
        this.locale.subscribe((subject : LocaleSubject) => {
            this.i18n = subject.locale.data.material;
        });
    }

    ngAfterViewInit() {
        //fixme cache the colros
        const backgroundColor = window.getComputedStyle(document.getElementsByTagName('snack-bar-container')[0]).backgroundColor;
        let buttonColor = window.getComputedStyle(this.elementButton.nativeElement).color;
        let iconColor = window.getComputedStyle(this.elementIcon.nativeElement).color;
        buttonColor = this.color.getReadableColor(buttonColor, backgroundColor)
        iconColor = this.color.getReadableColor(iconColor, backgroundColor);

        this.elementIcon.nativeElement.style.color = iconColor;
        this.elementButton.nativeElement.style.color = buttonColor;
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: Event) {
        this.ctx.dismiss();
    }
}