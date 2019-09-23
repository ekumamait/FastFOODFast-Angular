import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { ToasterService } from '../../../shared/services/toaster.service';
import { cleanUpSubscriptions } from 'src/app/shared/utils/helpers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  payload;
  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
    // convenience getter for easy access to form fields
    get formControls() { return this.loginForm.controls; }

  submit() {
    this.payload = {
      ...this.loginForm.value,
    };
    this.authService.sendRequest(this.payload).subscribe(
      data => {
        this.toaster.showSuccess('User logged in successfully');
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
