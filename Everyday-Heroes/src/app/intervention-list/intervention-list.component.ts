import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IInterventionPage} from '../lib/interface/pagination.interface';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-intervention-list',
  templateUrl: './intervention-list.component.html',
  styleUrls: ['./intervention-list.component.css']
})
export class InterventionListComponent implements OnInit {
  public pagination: IInterventionPage;
  public page: string;

  private url = 'http://localhost:5000/interventions/';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getInterventionByPage() {
    this.http.get(this.url, {
      params: {
        page: this.page
      }
    }).subscribe((data: IInterventionPage) => {
      if (data.currentPage.toString() !== this.page) {
        this.router.navigate(['/intervention/', data.currentPage]);
      }
      this.pagination = data;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.page = params.get('page');
      this.getInterventionByPage();
    });
  }
}
