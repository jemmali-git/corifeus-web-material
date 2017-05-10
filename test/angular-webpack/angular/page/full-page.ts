import {
    Component,
    Injectable,
} from '@angular/core';


@Component({
    template: `
        <md-toolbar color="primary">
            Corifeus Material
            <span class="cory-mat-fill-horizontal"></span>
            
        </md-toolbar>

        <div class="cory-mat-container">
            <md-card>
                <md-card-content>
                    <router-outlet>
                        
                    </router-outlet>
                </md-card-content>
            </md-card>
        </div>    
    `
})
@Injectable()
export class FullPage {

}