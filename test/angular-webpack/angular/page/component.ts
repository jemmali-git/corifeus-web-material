import {
    Component,
    Injectable,
    OnDestroy
} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {
    NotifyService
} from '../../../../src/services/notify/notify'


@Component({
    selector: 'cory-web-material-test-theme',
    template: `
       
        <fieldset>
            <legend>Request</legend>
            <button mat-raised-button color="primary" (click)="clickRquest()">CLICK</button>
            &nbsp;
            Count: {{ counter }}
        </fieldset>
        <br/>

        <fieldset>
            <legend>Icon</legend>
            <mat-icon>keyboard</mat-icon>
            <mat-icon>vpn_key</mat-icon>
            <mat-icon>face</mat-icon>
        </fieldset>
        <br/>


        <fieldset>
            <legend>Fontawesome</legend>
            <i class="fab fa-superpowers"></i> &nbsp; 
            <i class="fas fa-database"></i> &nbsp; 
            <i class="fas fa-coffee"></i> &nbsp; 
            <i class="fas fa-cubes"></i> &nbsp; 
            <i class="fas fa-shield-alt"></i> &nbsp; 
            <i class="fas fa-server"></i> &nbsp; 
            <i class="far fa-lightbulb"></i> &nbsp; 
            <i class="fas fa-ship"></i> &nbsp; 
            <i class="fas fa-tint"></i> &nbsp; 
            <i class="fas fa-gavel"></i> &nbsp; 
            <i class="fas fa-star"></i>  &nbsp; 
            <i class="fas fa-sitemap"></i>
        </fieldset>
        <br/>
        
        <fieldset>
            <legend>Button</legend>
            <span *ngFor="let color of colors">
                <button mat-button [color]="color">{{ color }}</button>&nbsp;   
            </span>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Button raised</legend>
            <span *ngFor="let color of colors">
                <button mat-raised-button [color]="color">{{ color }}</button> &nbsp;  
            </span>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Mat Link </legend>
            <span *ngFor="let color of colors">
                <a href="javascript:void(0);" mat-button [color]="color">{{ color }}</a> &nbsp;
            </span>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Mat Link raised</legend>
            <span *ngFor="let color of colors">
                <a href="javascript:void(0);" mat-raised-button [color]="color">{{ color }}</a> &nbsp;
            </span>
        </fieldset>

        <br/>
        <fieldset>
            <legend>Slide toggle</legend>
            <span *ngFor="let color of colors">
                 <mat-slide-toggle [color]="color">
                    {{ color }}
                </mat-slide-toggle>
            </span>
        </fieldset>

        <br/>
        <fieldset>
            <legend>Raw Link </legend>
            <span *ngFor="let index of [1,2,3,4,5]">
                <a href="javascript:void(0);">raw link {{ index }}</a>&nbsp;&nbsp;
            </span>
        </fieldset>
        
        <br/>
        <fieldset>
            <legend>Input</legend>
            <form class="cory-mat-form-full-width">
                <div *ngFor="let color of colors">
                    
                    <mat-form-field [color]="color" >
                        <input matInput [matDatepicker]="picker" placeholder="Choose a date">
                        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                        <mat-datepicker #picker></mat-datepicker>
                    </mat-form-field>
                </div>


            </form>
        </fieldset>
`
       
})
@Injectable()
export class Components implements OnDestroy{

    public colors: string[] = ['default', 'primary', 'accent', 'warn'];

    constructor(
        private http: HttpClient,
        private notify: NotifyService,
    ) {
//        window.corifeus.core.http.counter++;
    }

    async clickRquest() {
        const items = [
            'https://cdn.corifeus.com/git/corifeus/README.md',
            'https://server.patrikx3.com/api/patrikx3/git/repos',
            'https://server.patrikx3.com/api/core/util/random/10',
        ]

        //var item = items[Math.floor(Math.random()*items.length)];

        items.forEach(async(item) => {
            try {
                const response : any = await this.http.get(item).toPromise()
                //             const response : any = await this.http.get('https://server.patrikx3.com/api/patrikx3/test/521').toPromise()
                this.notify.info('Super!')
            } catch(e) {
                this.notify.error(e)
            }
        })
        try {
            const response : any = await this.http.get('https://server.patrikx3.com/api/core/util/random/10').toPromise()
            //             const response : any = await this.http.get('https://server.patrikx3.com/api/patrikx3/test/521').toPromise()
            this.notify.info('Super!')
        } catch(e) {
            this.notify.error(e)
        }
    }

    get counter() {
        return window.corifeus.core.http.counter;
    }

    ngOnDestroy() {
//        window.corifeus.core.http.counter--;

    }
}