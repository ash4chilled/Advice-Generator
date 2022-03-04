import { AdviceService } from './advice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdviceComponent } from './advice/advice.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AdviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
