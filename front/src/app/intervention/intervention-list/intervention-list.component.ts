import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IPagination} from "../../lib/interface/pagination.interface";

@Component({
  selector: 'app-intervention-list',
  templateUrl: './intervention-list.component.html',
  styleUrls: ['./intervention-list.component.css'],
})

export class InterventionListComponent implements OnInit {
  public pagination: IPagination;
  private url: string = "http://localhost:5000/interventions/?page=1";

  constructor(public http: HttpClient) {
  }

  getIntervention() {
    this.http.get(this.url).subscribe((data: IPagination) => {
      this.pagination = data;
    });
  }

  ngOnInit() {
    this.getIntervention();
  }
}
