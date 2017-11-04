import { platformBrowser }    from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
enableProdMode();


import './boot.common'

import {ModuleNgFactory} from './module.ngfactory';



platformBrowser().bootstrapModuleFactory(ModuleNgFactory);



