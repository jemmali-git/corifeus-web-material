import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
if (process.env.ENV === 'production') {
    enableProdMode();
}

import './boot.common'

import {Module} from './module';

platformBrowserDynamic().bootstrapModule(Module);


