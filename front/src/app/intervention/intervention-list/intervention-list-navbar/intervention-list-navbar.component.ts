import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-intervention-list-navbar',
  templateUrl: './intervention-list-navbar.component.html',
  styleUrls: ['./intervention-list-navbar.component.css']
})
export class InterventionListNavbarComponent implements OnInit {

  @Input()
  public nbInterventions: number;

  constructor() {}

  ngOnInit(): void {
  }

}
