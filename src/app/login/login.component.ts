import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup
  constructor(private fb: FormBuilder,private auth:AuthService, private _snackBar: MatSnackBar,private route:Router) {
    this.loginForm = this.fb.group({
      userName: ['',Validators.required],
      password:['',Validators.required]
    });
  }

  onSubmit() {
    const {userName,password}=this.loginForm.value;
    this.auth.login(userName,password).subscribe({
      next: (res) => {
        this.route.navigate(['/home'])
        this._snackBar.open('Success', 'okay',{

          duration: 3000
        }
        )
      },
      error: (err) => this._snackBar.open(err.error.message, 'okay',{
        duration: 3000
      }),
    }
    )

  }
}
