import { Subject } from 'rxjs';

export enum ActionTypes {
    INCR='increment',
    DECR='decrement'
}

interface InitialState{
    count:number
};

interface Event{
    type:String;
};

let state:InitialState = {
    count:0
}

export const store = new Subject<InitialState>();
export const evntDispatcher = new Subject<Event>();

evntDispatcher.subscribe((data:Event)=>{
    switch(data.type){
        case ActionTypes.INCR:
            state.count++;
            store.next(state);
            break;
        case ActionTypes.DECR:
            state.count--;
            store.next(state);
            break;
    }
})


