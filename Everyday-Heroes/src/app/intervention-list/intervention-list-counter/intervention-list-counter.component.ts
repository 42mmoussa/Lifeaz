import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-intervention-list-counter',
  templateUrl: './intervention-list-counter.component.html',
  styleUrls: ['./intervention-list-counter.component.css']
})
export class InterventionListCounterComponent implements OnInit {

  @Input()
  public nbInterventions: number;

  constructor() { }

  ngOnInit(): void {
  }

}
