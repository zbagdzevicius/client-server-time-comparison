import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './components/time/time.component';
import {NgxsModule} from "@ngxs/store";
import {TimeState} from "../core/state/time.state";
import {TimeService} from "../core/services/time.service";



@NgModule({
  declarations: [TimeComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([TimeState]),
  ],
  providers: [TimeService],
  exports: [TimeComponent],
})
export class TimeModule { }
