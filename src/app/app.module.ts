import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChipDetailComponent } from './chip-detail/chip-detail.component';
import { ChipListComponent } from './chip-list/chip-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipDetailComponent,
    ChipListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
