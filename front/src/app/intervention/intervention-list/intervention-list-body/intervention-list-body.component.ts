import {Component, Input} from '@angular/core';
import {IIntervention} from "../../../lib/interface/intervention.interface";
import {getDateDiff} from "../../../lib/utils/date";

@Component({
  selector: 'app-intervention-list-body',
  templateUrl: './intervention-list-body.component.html',
  styleUrls: ['./intervention-list-body.component.css']
})
export class InterventionListBodyComponent {

  @Input()
  public interventions: IIntervention[];

  public durationinterventions: string[] = [];

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    for (let intervention of this.interventions) {
      let duration = await getDateDiff(intervention.date)
      this.durationinterventions.push(duration)
    }
  }
}
