import { Injectable } from '@angular/core';
import { PermanenceSchedule } from '../model/permanence-schedule';

@Injectable({
  providedIn: 'root'
})
export class PermanenceScheduleSService {
  public schedule: PermanenceSchedule;
  public schedules: Array<PermanenceSchedule>;
  public get Ss(): Array<PermanenceSchedule> {
    if (this.schedules == null) {
      this.schedules = new Array<PermanenceSchedule>();
    }
    return this.schedules;
  }
  public get S(): PermanenceSchedule {
    if (this.schedule == null) {
      this.schedule = new PermanenceSchedule();
    }
    return this.schedule;
  }

  pushing() {
    this.schedules.push(this.clonePermanence(this.schedule));
  }
  constructor() { }
  private clonePermanence(permanence: PermanenceSchedule): PermanenceSchedule {
    const myClone = new PermanenceSchedule();
    myClone.title = permanence.title;
    myClone.date = permanence.date;
    myClone.endDate= permanence.endDate;
    return myClone;
  }

}
