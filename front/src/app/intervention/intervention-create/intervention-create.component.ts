import { Component } from "@angular/core"

@Component({
  selector: "app-intervention-create",
  templateUrl: "./intervention-create.component.html",
  styleUrls: ["./intervention-create.component.css"]
})

export class InterventionCreateComponent {
  enteredContent = ""
  enteredTitle = ""

  onAddIntervention() {
    const intervention = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
  }
}
