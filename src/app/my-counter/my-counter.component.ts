import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store'; // Store ve select  kullanıldığı için import edild
import { Observable } from 'rxjs'; // Observable metodlarını kullandığımız için  bunu import ettik //  https://rxjs-dev.firebaseapp.com/guide/operators
import { increment, decrement, reset } from '../ counter.actions'; // src/app/ counter.actions.ts dosyasında  createAction metoduyla oluşturduğumuz Actionlar
 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>; // counter$  number türünde bir observable demek
 
  constructor(private store: Store<{ count: number }>) {  // Dependency injection yöntemiyle Store içinde number türünde count değişkeni oluşturuldu
    this.count$ = store.pipe(select('count')); //  select metodu burada Store içindeki count değişkenini seçiyor.  bu observable  count$ değişkenine atanıyor.
  }
  increment() {   // src/app/my-counter/my-counter.component.html içinde  (click) ile çağırdığımız metod
    this.store.dispatch(increment());
  }
 
  decrement() { // src/app/my-counter/my-counter.component.html içinde  (click) ile çağırdığımız metod
    this.store.dispatch(decrement());
  }
 
  reset() { // src/app/my-counter/my-counter.component.html içinde  (click) ile çağırdığımız metod
    this.store.dispatch(reset());
  }
}