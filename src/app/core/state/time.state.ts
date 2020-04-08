import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {TimeService} from "../services/time.service";
import {IServerClientTime} from "../models/time.interface";


export class GetTimeAction {
  static readonly type = '[Time] GetTimeAction';

  constructor(public currentDate: Date){}
}

export interface TimeModel {
  serverClientTime: IServerClientTime
}

@Injectable()
@State<TimeModel>({
  name: 'time',
  defaults: {
    serverClientTime: null,
  },
})
export class TimeState {
  constructor(private timeService: TimeService) {}

  @Selector()
  static serverClientTime(state: TimeModel): IServerClientTime {
    return state.serverClientTime;
  }

  @Action(GetTimeAction)
  getTime(ctx: StateContext<TimeModel>, action: GetTimeAction) {
    return this.timeService.getTime().pipe(
      tap(serverTime => {
        const currentDate = new Date();
        ctx.patchState({
          serverClientTime: {
            serverTime,
            currentClientTime: currentDate,
            requestResponseTime: currentDate.getTime() - action.currentDate.getTime(),
          },
        });
      }),
    );
  }
}
