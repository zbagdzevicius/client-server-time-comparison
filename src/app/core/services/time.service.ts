import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITime} from "../models/time.interface";

@Injectable()
export class TimeService {
  constructor(private http: HttpClient) {
  }

  getTime(): Observable<ITime> {
    return this.http.get<ITime>('http://worldtimeapi.org/api/timezone/Europe/Vilnius');
  }
}
