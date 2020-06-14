import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IInterventionPage} from "../../lib/interface/pagination.interface";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intervention-list',
  templateUrl: './intervention-list.component.html',
  styleUrls: ['./intervention-list.component.css'],
})

export class InterventionListComponent implements OnInit {
  public pagination: IInterventionPage;
  public page: string;

  private url: string = "http://localhost:5000/interventions/";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.page = this.route.snapshot.paramMap.get("page")
  }

  getInterventionByPage() {
    this.http.get(this.url, {
      params: {
        page: this.page
      }
    }).subscribe((data: IInterventionPage) => {
      if (data.currentPage.toString() !== this.page) {
        // this.router.navigate(['/intervention/', data.currentPage])
      }
      this.pagination = data;
    });
  }

  ngOnInit() {
    console.log("OKOKOKko")
    this.getInterventionByPage();
  }
}
