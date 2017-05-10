import { Routes } from '@angular/router';

import { Layout } from '../layout';

import { Components } from '../page/component';
import { Login } from '../page/login';
import { FullPage } from '../page/full-page';
import { Raw } from '../page/raw';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'full',
                component: FullPage,
                children: [
                    {
                        path: 'components',
                        component: Components
                    },
                ]
            },
            {
                path: 'login',
                component: Login,
            }
        ],
    },
    {
        path: 'raw',
        component: Raw
    }
    /*
    {
        path: '**',
        compoent: project.Http404
    }
    */
];