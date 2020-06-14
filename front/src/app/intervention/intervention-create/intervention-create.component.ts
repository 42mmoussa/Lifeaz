import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";

@Component({
  selector: "app-intervention-create",
  templateUrl: "./intervention-create.component.html",
  styleUrls: ["./intervention-create.component.css"]
})
export class InterventionCreateComponent implements OnInit {
  enteredContent = ""
  enteredTitle = ""

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log("bonjour")
  }

  // onAddIntervention() {
  //   const intervention = {
  //     title: this.enteredTitle,
  //     content: this.enteredContent
  //   }
  // }
}
