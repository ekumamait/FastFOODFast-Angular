import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { ToasterService } from '../../../shared/services/toaster.service';
import { cleanUpSubscriptions } from 'src/app/shared/utils/helpers';
import { Subscription } from 'rxjs';
import { Validations } from '../../../shared/utils/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  payload;
  subscriptions: Subscription[] = [];
  @Output() userValid: EventEmitter<any> = new EventEmitter<any>(false);
  message: any = {};
  validate = new Validations();
  private validationMessages = {
    required: 'This field is required',
    isValid: 'Please enter a value e.g (johndoe@mail.com)',
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toaster: ToasterService
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      user_name: ['', [Validators.required, Validators.minLength(4)]],
      user_email: ['', [Validators.required, this.validate.validInput]],
      user_password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.registrationForm.valueChanges.subscribe((data: Object) => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
          this.setMessage(
            this.registrationForm.get(key),
            this.validationMessages,
            key,
          );
        }
      }
    });
    this.registrationForm.valueChanges.subscribe(event => this.userValid.emit(this.registrationForm.valid));
  }

    // set specific reactive message for input field
  setMessage = (
    c: AbstractControl,
    validationMessages,
    controlName: string,
  ): void => {
    if ((c.touched || c.dirty) && c.errors) {
      this.message[controlName] = Object.keys(c.errors)
        .map(key => {
          if (key.includes('length')) {
            const da = Object.keys(c.errors).map(dd => {
              return c.errors[dd].requiredLength;
            });
            return `${key} of ${da[0]} is required`;
          }
          return this.validationMessages[key];
        })
        .join(' ');
    } else {
      this.message[controlName] = '';
    }
  };


  // convenience getter for easy access to form fields
  get formControls() { return this.registrationForm.controls; }

  submit() {
    console.log(this.registrationForm.controls.user_name);
    
    this.payload = {
      ...this.registrationForm.value,
    };
    this.authService.sendRegData(this.payload).subscribe(
      data => {
        this.toaster.showSuccess('User registered successfully');
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      err => {
        this.toaster.showError('Oops there is an error, please retry!');
      },
    );
  }

  ngOnDestroy() {
    cleanUpSubscriptions(this.subscriptions);
  }
}
