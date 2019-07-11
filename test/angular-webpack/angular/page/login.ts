import {
    Component,
    Injectable,
} from '@angular/core';

import {AuthService} from 'corifeus-web';
import {NotifyService} from '../../../../src';

@Component({
    selector: 'cory-web-material-test-login',
    template: `

       
        <div class="flex-container">
            <div class="row">
                <div class="flex-item">
                    <cory-mat-login></cory-mat-login>
                                        
                    <br/>

                                       
                    <button mat-raised-button color="primary" (click)="verify()">
                        Verify
                    </button>
                    
                    <button mat-raised-button color="primary" (click)="prolongate()">
                        Prolongate
                    </button>
                </div>
            </div>
        </div>
    `,
})
@Injectable()
export class Login {

    constructor(
        private auth: AuthService,
        private notify: NotifyService,
    ) {
    }

    public async verify() {
        try {
            const result = await this.auth.verify()
            console.log(result);
            this.notify.info('Verified');
        } catch (e) {
            this.notify.error(e)
        }
    }


    public async prolongate() {
        try {
            const result = await this.auth.prolongate()
            console.log(result);
            this.notify.info('Prolongated');
        } catch (e) {
            this.notify.error(e)
        }
    }

}
