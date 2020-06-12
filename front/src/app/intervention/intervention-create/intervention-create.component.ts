import {Component} from "@angular/core"

@Component({
  selector: 'app-intervention-create',
  templateUrl: './intervention-create.component.html'
})

export class InterventionCreateComponent {
  enteredValue = ""
  newIntervention = 'NO CONTENT'

  onAddIntervention() {
    this.newIntervention = this.enteredValue
  }
}
