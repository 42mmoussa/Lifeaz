import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intervention-button',
  templateUrl: './intervention-button.component.html',
  styleUrls: ['./intervention-button.component.css'],

})
export class InterventionButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
