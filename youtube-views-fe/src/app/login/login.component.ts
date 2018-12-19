import { Component, OnInit } from '@angular/core';
import { Errors } from '../core/models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data: Date = new Date();
    focus;
    focus1;

    authType: String = '';
    title: String = '';
    errors: Errors = {errors: {}};
    isSubmitting = false;
    authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    // this.route.url.subscribe(data => {
    //   // Get the last piece of the URL (it's either 'login' or 'register')
    //   this.authType = data[data.length - 1].path;
    //   // Set a title for the page accordingly
    //   this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
    //   // add form control for username if this is the register page
    //   if (this.authType === 'register') {
    //     this.authForm.addControl('username', new FormControl());
    //   }
    // });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;
    this.userService
      .attemptAuth(this.authType, credentials)
      .subscribe(
        data => this.router.navigateByUrl('/'),
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
  }

}
