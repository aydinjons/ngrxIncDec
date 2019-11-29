import { createAction } from '@ngrx/store';
// src/app/counter.reducer.ts  dosyasında oluşturduğumuz  _counterReducer reducer'ı bunlarla çalışıyor
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');


// Yukarıda createAction metoduyla ihtiyacımız olan Action'ları oluşturduk
