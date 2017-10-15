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
            <mat-icon>keyboard</mat-icon>
            <mat-icon>vpn_key</mat-icon>
            <mat-icon>face</mat-icon>
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
                        <input matInput [placeholder]="'input ' + color" [value]="" type="date">
                    </mat-form-field>
                </div>

                    <mat-form-field >
                        <input matInput type="month" class="webkit-autofill" placeholder="input:-webkit-autofill">
                    </mat-form-field>

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