import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IInterventionPage} from '../lib/interface/pagination.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {getDateDiff} from '../lib/utils/date';

@Component({
  selector: 'app-intervention-list',
  templateUrl: './intervention-list.component.html',
  styleUrls: ['./intervention-list.component.css']
})
export class InterventionListComponent implements OnInit {

  public pagination: IInterventionPage;
  public page: string;
  public durationInterventions: string[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getInterventionByPage() {
    this.http.get(environment.api.url + environment.api.getIntervention, {
      params: {
        page: this.page
      }
    }).subscribe((data: IInterventionPage) => {
      if (data.currentPage.toString() !== this.page) {
        this.router.navigate(['/intervention/', data.currentPage]);
      }
      this.pagination = data;
      this.durationInterventions = this.getDuration();
    });
  }

  getDuration(): string[] {
    const durationInterventions = [];
    for (const intervention of this.pagination.pageElement) {
      const duration = getDateDiff(intervention.date);
      durationInterventions.push(duration);
    }
    return durationInterventions;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.page = params.get('page');
      this.getInterventionByPage();
    });
  }
}
