import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RoomDetailsModule } from './room-details/room-details.component';

import * as Chart from '../../node_modules/ng2-charts/ng2-charts.js';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { TimingComponent } from './timing/timing.component';
import { QuickComponent } from './quick/quick.component';
import { RelativeComponent } from './relative/relative.component';
import { AbsoluteComponent } from './absolute/absolute.component';

import { MyDatePickerModule} from 'mydatepicker';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    TimingComponent,
    QuickComponent,
    RelativeComponent,
    AbsoluteComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RoomDetailsModule,
    MyDatePickerModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
