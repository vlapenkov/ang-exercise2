import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { MockedusersService } from "./mockedusers.service";
import {Observable, of} from 'rxjs';
import {delay, find} from 'rxjs/internal/operators';
import { first, tap, filter, map } from 'rxjs/operators';
import { from } from 'rxjs';
import {ValidationErrors} from '@angular/forms/src/directives/validators';


/*
export function someFunc (needUser:boolean = false)
{
  console.log('need user is' + needUser);
}*/


/*
/*  needUser - works as false in signupForm and true in loginForm 
*/

export function asyncUserExistValidator(userService:MockedusersService, needUser:boolean = false): AsyncValidatorFn {
    return (control: AbstractControl):  Observable<ValidationErrors | null> => {
      return userService.checkUsername(control.value as string).pipe(
        tap(result => {
         console.log('user found is: '+ result);
        console.log('need user is '+ needUser);
      }),
      map(result => (result && !needUser || !result && needUser) ? {userrequired:true} : null));
  
    }   
    }