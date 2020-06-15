import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-intervention-create',
  templateUrl: './intervention-create.component.html',
  styleUrls: ['./intervention-create.component.css']
})
export class InterventionCreateComponent implements OnInit {
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  content: FormControl = new FormControl('', [Validators.required, Validators.minLength(40), Validators.maxLength(240)]);
  type: FormControl = new FormControl('', [Validators.required, Validators.maxLength(25)]);
  title: FormControl = new FormControl('', [Validators.required, Validators.maxLength(40)]);

  constructor() { }

  ngOnInit(): void {
  }

  getEmailErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Veuillez saisir votre e-mail';
    }

    return this.email.hasError('email') ? 'E-mail invalide' : '';
  }

  getContentErrorMessage() {
    if (this.content.hasError('required')) {
      return 'Veuillez remplir ce champs';
    }

    if (this.content.hasError('minlength')) {
      return '40 caractères minimum';
    }

    return this.content.hasError('mexlength') ? '240 caractères max' : '';
  }

  getTypeErrorMessage() {
    if (this.type.hasError('required')) {
      return 'Veuillez remplir ce champs';
    }

    return this.email.hasError('maxlength') ? '25 caractères max' : '';
  }

  getTitleErrorMessage() {
    if (this.type.hasError('required')) {
      return 'Veuillez ajouter un titre';
    }

    return this.email.hasError('maxlength') ? '40 caractères max' : '';
  }
}
