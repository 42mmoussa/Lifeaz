import {Component, Input} from '@angular/core';
import {IIntervention} from "../../../interface/intervention.interface";

@Component({
  selector: 'app-intervention-list-body',
  templateUrl: './intervention-list-body.component.html',
  styleUrls: ['./intervention-list-body.component.css']
})
export class InterventionListBodyComponent {

  public breakpoint: number
  public height: number
  @Input()
  public interventions: IIntervention[];

  constructor() {
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 768) ? 100 : 70;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 100 : 70;
    this.height = event.target.innerHeight;
  }

}
