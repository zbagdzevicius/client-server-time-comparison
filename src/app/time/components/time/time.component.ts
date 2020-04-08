import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GetTimeAction, TimeState} from "../../../core/state/time.state";
import {Observable} from "rxjs";
import {IServerClientTime} from "../../../core/models/time.interface";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  @Select(TimeState.serverClientTime) serverClientTime$: Observable<IServerClientTime>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetTimeAction(new Date()));
    setInterval(() => {
      this.store.dispatch(new GetTimeAction(new Date()));
    }, 10000);
  }

}
