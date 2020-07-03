import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = ''; // Validation error handle
  error: {name: string, message: string} = {name: '', message: ''}; // for firebase error handle

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  clearErrorMessage()
  {
    this.errorMessage = '' ;
    this.error = {name : '' , message : ''  } ;
  }

  // tslint:disable-next-line: typedef
  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password))
    {
      this.authservice.loginWithEmail(this.email, this.password).then(() =>
      {
        // tslint:disable-next-line: no-unused-expression
       this.router.navigate(['/userinfo']);
      // tslint:disable-next-line: variable-name
      }).catch((_error: { name: string; message: string; }) => {
        this.error = _error;
        this.router.navigate(['/login']);
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

  this.errorMessage = '';
  return true;
  }
}
