
import {FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import { MockedusersService } from './shared/mockedusers.service';
import {asyncUserExistValidator} from './shared/userexistsvalidator';


 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 public currentPage='signup';

 public signupForm:FormGroup;
 public loginForm: FormGroup;

 public firstName: FormControl;
 public lastName: FormControl;
 public email : FormControl;
 public pwd1 : FormControl;

 public email2 : FormControl;
 public pwd2 : FormControl;
 public signupSubmitted=false;
 public loginSubmitted=false;
 

 constructor(  
  private _fb: FormBuilder,
  private _userService:MockedusersService
) {
}

ngOnInit() {
  


 this.firstName = new FormControl('', [Validators.required, Validators.minLength(4), this._nameValidator] );
    this.lastName = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.email = new FormControl('', [Validators.required, Validators.email],[asyncUserExistValidator(this._userService,false)]);
    this.pwd1 = new FormControl('', [Validators.required, Validators.minLength(6)]);
  

  this.email2 = new FormControl('',[Validators.required, Validators.email],[asyncUserExistValidator(this._userService,true)]);
  this.pwd2 = new FormControl('', [Validators.required, Validators.minLength(6)]);
  this.loginForm = this._fb.group({
    email2: this.email2,
    pwd2: this.pwd2    
  });


  this.signupForm = this._fb.group({
    firstName: this.firstName,
    lastName: this.lastName,
    email:this.email, 
    pwd1:this.pwd1
  });

  
   
   
}


private _nameValidator(control: FormControl): ValidationErrors | null {
  const value: string = control.value;
  const valid: boolean = /^[A-Za-z]*$/.test(value);
  const err = valid
    ? null
    : {nospecial: true};
  return err;
}
}


 
