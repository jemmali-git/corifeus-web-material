import {
    Injectable,
    Component,
    AfterViewInit,
    ViewChild,
    ElementRef,
    HostListener,
    Inject
} from '@angular/core';

import { ThemeService } from '../theme'
import { ColorService } from 'corifeus-web'

import { NotifyOptions } from './notify'

import {MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

import { LocaleService, LocaleSubject } from 'corifeus-web';

@Component({

    template: `
        <div style="position: absolute;">
            <mat-icon color="accent" #elementIcon>{{ data.options.icon }}</mat-icon>
            <span #elementMessage class="message" [innerHTML]="data.message | coryHtml"></span>
        </div>
        <a mat-button color="accent" #elementButton class="cory-mat-notify-button" (click)="ctx.dismiss()">{{ this.i18n.title.ok }}</a>

    `,

    styles: [`
        .message {
            position: relative;
            top: -7px;
        }

        [mat-button]{
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
    @ViewChild('elementMessage', {read: ElementRef}) elementMessage : ElementRef;

    inited: boolean = false;

    public data: { message: string, options: any };

    i18n: any;

    constructor(
        public ctx: MatSnackBarRef<NotifyComponent>,
        private locale: LocaleService,
        private theme: ThemeService,
        private color: ColorService,
        @Inject(MAT_SNACK_BAR_DATA) data: any,
    ) {
        this.locale.subscribe((subject : LocaleSubject) => {
            this.i18n = subject.locale.data.material;
        });
        this.data = data;
    }

    ngAfterViewInit() {
        this.ctx.afterOpened().subscribe(() => {
            const snackElement = <HTMLElement>document.getElementsByTagName('snack-bar-container')[0];
            //fixme cache the colors
            const backgroundColor = window.getComputedStyle(snackElement).getPropertyValue('background-color');
            let color = window.getComputedStyle(snackElement).getPropertyValue('color');
            let buttonColor = window.getComputedStyle(this.elementButton.nativeElement).color;
            let iconColor = window.getComputedStyle(this.elementIcon.nativeElement).color;
            buttonColor = this.color.getReadableColor(buttonColor, backgroundColor)
            iconColor = this.color.getReadableColor(iconColor, backgroundColor);
            color = this.color.getReadableColor(color, backgroundColor);
            this.elementIcon.nativeElement.style.color = iconColor;
            this.elementButton.nativeElement.style.color = buttonColor;
            this.elementMessage.nativeElement.style.color = color;
        })
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: Event) {
        this.ctx.dismiss();
    }
}