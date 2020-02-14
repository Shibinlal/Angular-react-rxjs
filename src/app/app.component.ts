import { Component } from '@angular/core';
import { store, evntDispatcher, ActionTypes} from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    store.subscribe((state)=>{
      const count = state.count;
      this.count = count;
    })
  }
  count = 0;
  title = 'rxjs-angular-react';
  name: string = 'from angular';
  incrementCounter(){
    console.log('hit')
    evntDispatcher.next({type:ActionTypes.INCR})
  }

  decrementCounter(){
    console.log('hit')
    evntDispatcher.next({type:ActionTypes.DECR})
  }
}
