import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) {}

  email = '';
  password = '';
  message = '';
  errorMessage = ''; // Validation error handle
  error: {name: string, message: string} = {name: '', message: ''}; // for firebase error handle

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  clearErrorMessage()
  {
    this.errorMessage = '' ;
    this.error = {name : '' , message : ''  } ;
    this.message = '';
  }

  // tslint:disable-next-line: typedef
  register()
    {
      this.clearErrorMessage();
      if (this.validateForm(this.email, this.password))
      {
        this.authservice.registerWithEmail(this.email, this.password).then(() =>
        {

          // tslint:disable-next-line: no-unused-expression
         this.router.navigate(['/userinfo']);
        // tslint:disable-next-line: variable-name
        }).catch( (_error: { name: string; message: string; }) => {
          this.error = _error;
          this.router.navigate(['/register']);
        });
      }
    }

  // tslint:disable-next-line: typedef
  validateForm(email: string | any[], password: string | any[])
  {
    if (email.length === 0)
    {
      this.errorMessage = 'The email address is badly formatted';
      return false;
    }

    if (password.length === 0)
    {
      this.errorMessage = 'Please enter a password';
      return false;
    }

    if (password.length < 6)
    {
      this.errorMessage = 'Password should be atleast 6 characters';
      return false;
    }

    this.message = 'You are Registered with data on firebase Successfully.Kindly Click Proceed to Login. P.S. if you registered with same email ID again with different password the password you added 1st time you used the email is considered';
    return true;
    }
  }
