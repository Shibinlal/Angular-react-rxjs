import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { registerElement} from '@angular-react/core';

import { ReactBaseComponent } from './react-base.component';
import { ReactBase } from './ReactBase';

@NgModule({
    imports:[],
    declarations:[ReactBaseComponent],
    exports:[ReactBaseComponent],
    providers:[],
    schemas:[NO_ERRORS_SCHEMA]
})
export class ReactBaseModule {
    constructor(){
        registerElement('ReactBase', ()=>ReactBase)
    }
}

