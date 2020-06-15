import {Component, Input, OnInit} from '@angular/core';
import { IIntervention } from '../../lib/interface/intervention.interface';
import { getDateDiff } from '../../lib/utils/date';

@Component({
  selector: 'app-intervention-list-body',
  templateUrl: './intervention-list-body.component.html',
  styleUrls: ['./intervention-list-body.component.css']
})
export class InterventionListBodyComponent implements OnInit {

  @Input()
  public interventions: IIntervention[];

  @Input()
  public durationInterventions: string[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
