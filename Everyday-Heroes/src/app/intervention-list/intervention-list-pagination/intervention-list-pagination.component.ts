import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-intervention-list-pagination',
  templateUrl: './intervention-list-pagination.component.html',
  styleUrls: ['./intervention-list-pagination.component.css']
})
export class InterventionListPaginationComponent implements OnInit {

  @Input()
  public totalPages: number;

  @Input()
  public currentPage: number;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onPage(page: number) {
    this.router.navigate(['/intervention/', page]);
  }
}
