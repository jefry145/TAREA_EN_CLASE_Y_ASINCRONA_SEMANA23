import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


constructor(private Data: BreakpointObserver) {}
emailFormControl = new FormControl('', [Validators.required, Validators.email]);
passFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
}