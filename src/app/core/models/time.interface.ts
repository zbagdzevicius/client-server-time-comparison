export interface ITime {
  week_number: number;
  utc_offset: string;
  utc_datetime: Date;
  unixtime: number;
  timezone: string;
  raw_offset: number;
  dst_until: Date;
  dst_offset: number;
  dst_from: Date;
  dst: true;
  day_of_year: number;
  day_of_week: number;
  datetime: string;
  client_ip: string;
  abbreviation: string;
}

export interface IServerClientTime {
  serverTime: ITime;
  currentClientTime: Date;
  requestResponseTime: number;
}
