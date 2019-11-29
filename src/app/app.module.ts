import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
 
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
 
@NgModule({
  declarations: [AppComponent,MyCounterComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }), // Store burada oluşturuluyor
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({  // Redux devtools çalıştırılması için  gerekli
      maxAge: 25 // History 25 adet ile sınırlandırıldı  son 25 state tutuluyor
    }),
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}