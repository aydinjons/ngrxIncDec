import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './ counter.actions';  // src/app/ counter.actions.ts içindeki actionları import ediyoruz çünkü reducer'ın bunlarla çalışacak
 
export const initialState = 0; // Bu zorunlu  initialState tanımlanmak zorunda.  Aşağıdaki _counterReducer  initial state olarak bu değeri arayacak.
 
export const counterReducer = createReducer(initialState, 
  on(increment, state => state + 1),  // on metodu yeni versiyonla geldi bu temelde switch-case yapısıyla aynı... bu aksyon tetiklendiğinde State'e 1 eklenecek ve güncel state return edilecek.
  on(decrement, state => state - 1),  //  satırla aynı state'i 1 eksiltip return eder
  on(reset, () => 0), // state'ı 0 yapıp return eder.
); 
 