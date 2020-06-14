import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intervention-create-redirect-button',
  templateUrl: './intervention-create-redirect-button.component.html',
  styleUrls: ['./intervention-create-redirect-button.component.css'],

})
export class InterventionCreateRedirectButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPageCreateIntervention(): boolean {
    this.router.navigateByUrl("/intervention/create");
    return false;
  }

}
