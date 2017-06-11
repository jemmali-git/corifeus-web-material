import {
    Component,
    Injectable,
    OnDestroy
} from '@angular/core';


@Component({
    selector: 'cory-web-material-test-theme',
    template: `

        <fieldset>
            <legend>Icon</legend>
            <md-icon>keyboard</md-icon>
            <md-icon>vpn_key</md-icon>
            <md-icon>face</md-icon>
        </fieldset>
        <br/>
        
        <fieldset>
            <legend>Button</legend>
            <span *ngFor="let color of colors">
                <button md-button [color]="color">{{ color }}</button>&nbsp;   
            </span>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Button raised</legend>
            <span *ngFor="let color of colors">
                <button md-raised-button [color]="color">{{ color }}</button> &nbsp;  
            </span>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Mat Link </legend>
            <span *ngFor="let color of colors">
                <a href="javascript:void(0);" md-button [color]="color">{{ color }}</a> &nbsp;
            </span>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Mat Link raised</legend>
            <span *ngFor="let color of colors">
                <a href="javascript:void(0);" md-raised-button [color]="color">{{ color }}</a> &nbsp;
            </span>
        </fieldset>

        <br/>
        <fieldset>
            <legend>Slide toggle</legend>
            <span *ngFor="let color of colors">
                 <md-slide-toggle [color]="color">
                    {{ color }}
                </md-slide-toggle>
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
                    <md-input-container [color]="color" >
                        <input mdInput [placeholder]="'input ' + color" [value]="" type="date">
                    </md-input-container>
                </div>

                    <md-input-container >
                        <input mdInput type="month" class="webkit-autofill" placeholder="input:-webkit-autofill">
                    </md-input-container>

            </form>
        </fieldset>
`
       
})
@Injectable()
export class Components implements OnDestroy{

    public colors: string[] = ['default', 'primary', 'accent', 'warn'];

    constructor( ) {
//        window.corifeus.core.http.counter++;
    }

    ngOnDestroy() {
//        window.corifeus.core.http.counter--;

    }
}