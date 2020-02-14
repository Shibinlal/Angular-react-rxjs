import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'react-base',
    exportAs:'reactBase',
    template:`
        <ReactBase [name]="name" (onClick)="onClick($event)"></ReactBase>
    `,
    styles:[
        'react-renderer',
        ':host{dispaly:inline-block;background:red}'
    ],
    changeDetection:ChangeDetectionStrategy.OnPush,
    host:{'class':'react-base'}
})

export class ReactBaseComponent{
    @Input() name:string;
    @Output() onClick:string;
    constructor(){
        this.name = 'John';
    }
}



