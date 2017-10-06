import {
    Component,
    Injectable,
} from '@angular/core';


@Component({
    template: `
        <mat-toolbar color="primary">
            Corifeus Material
            <span class="cory-mat-fill-horizontal"></span>
            
        </mat-toolbar>

        <div class="cory-mat-container">
            <mat-card>
                <mat-card-content>
                    <router-outlet>
                        
                    </router-outlet>
                </mat-card-content>
            </mat-card>
        </div>    
    `
})
@Injectable()
export class FullPage {

}