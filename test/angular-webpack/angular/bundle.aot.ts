// must be the first, or 2nd
import { enableProdMode } from '@angular/core';
enableProdMode();

import { platformBrowser }    from '@angular/platform-browser';

import './boot.common'

import {ModuleNgFactory} from '../../../build/aot/test/angular-webpack/angular/module.ngfactory';



platformBrowser().bootstrapModuleFactory(ModuleNgFactory);



