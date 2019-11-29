import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store'; // Store ve select  kullanıldığı için import edildi
import { Observable } from 'rxjs'; // Observable metodlarını kullandığımız için  bunu import ettik //  https://rxjs-dev.firebaseapp.com/guide/operators
import { increment, decrement, reset } from '../ counter.actions'; // src/app/ counter.actions.ts dosyasında  createAction metoduyla oluşturduğumuz Actionlar
 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>; // count$  number türünde bir observable demek
 
  constructor(private store: Store<{ count: number }>) {  // Statin tipi belirtildi. bir obje olduğu ve içerisinde number türünde count değişkeni olduğu söylendi.
    this.count$ = store.pipe(select('count')); //  select metodu burada Store içindeki count değişkenini seçiyor.  bu observable  count$ değişkenine atanıyor.
  }
  increment() {   // src/app/my-counter/my-counter.component.html içinde  (click) ile çağırdığımız metod
    this.store.dispatch(increment()); // increment aksyonu payload göndermeden tetikledik. src/app/counter.reducer.ts altındaki _counterReducer'na göndermiş olduk
  }
 
  decrement() { // src/app/my-counter/my-counter.component.html içinde  (click) ile çağırdığımız metod
    this.store.dispatch(decrement()); // decrement aksyonu payload göndermeden tetikledik. src/app/counter.reducer.ts altındaki _counterReducer'na göndermiş olduk
  }
 
  reset() { // src/app/my-counter/my-counter.component.html içinde  (click) ile çağırdığımız metod
    this.store.dispatch(reset()); // reset aksyonu payload göndermeden tetikledik. src/app/counter.reducer.ts altındaki _counterReducer'na göndermiş olduk
  }
}