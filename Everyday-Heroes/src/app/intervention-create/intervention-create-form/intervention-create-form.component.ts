import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-intervention-create-form',
  templateUrl: './intervention-create-form.component.html',
  styleUrls: ['./intervention-create-form.component.css']
})
export class InterventionCreateFormComponent implements OnInit {

  public interventionForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.interventionForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      content: new FormControl('', [Validators.required, Validators.minLength(40), Validators.maxLength(240)]),
      type: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      title: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      author: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }

  sendIntervention(data: { [key: string]: string; } ): void {
    data.avatar = 'http://via.placeholder.com/300x300';
    this.http
      .post(environment.api.url + environment.api.postIntervention, data, {responseType: 'text'})
      .subscribe(response => {
        if (response === 'success') {
          this.router.navigateByUrl(environment.endpoints.intervention.list + '1');
        } else {
          this.router.navigateByUrl(environment.endpoints.intervention.list + '1?error=true');
        }
      });
  }

  addIntervention(): boolean {
    if (!this.allValidFields()) {
      this.interventionForm.markAllAsTouched();
      return false;
    }
    const data: { [key: string]: string; }  = this.interventionForm.getRawValue();

    this.sendIntervention(data);

    return true;
  }

  allValidFields(): boolean {
    if (this.getEmailErrorMessage()
      || this.getContentErrorMessage()
      || this.getTypeErrorMessage()
      || this.getTitleErrorMessage()
      || this.getAuthorErrorMessage()
    ) {
      return false;
    }
    return true;
  }

  getEmailErrorMessage(): string {
    const email: AbstractControl = this.interventionForm.get('email');
    if (email.hasError('required')) {
      return 'Veuillez saisir votre e-mail';
    }

    return email.hasError('email') ? 'E-mail invalide' : '';
  }

  getContentErrorMessage() {
    const content: AbstractControl = this.interventionForm.get('content');
    if (content.hasError('required')) {
      return 'Veuillez remplir ce champs';
    }

    if (content.hasError('minlength')) {
      return '40 caractères minimum';
    }

    return content.hasError('mexlength') ? '240 caractères max' : '';
  }

  getTypeErrorMessage() {
    const type: AbstractControl = this.interventionForm.get('type');
    if (type.hasError('required')) {
      return 'Veuillez remplir ce champs';
    }

    return type.hasError('maxlength') ? '25 caractères max' : '';
  }

  getTitleErrorMessage() {
    const title: AbstractControl = this.interventionForm.get('type');
    if (title.hasError('required')) {
      return 'Veuillez ajouter un titre';
    }

    return title.hasError('maxlength') ? '40 caractères max' : '';
  }

  getAuthorErrorMessage() {
    const author: AbstractControl = this.interventionForm.get('author');
    if (author.hasError('required')) {
      return 'Veuillez indiquer votre prénom';
    }

    return author.hasError('maxlength') ? '30 caractères max' : '';
  }

}
