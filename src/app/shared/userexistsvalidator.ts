import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { MockedusersService } from "./mockedusers.service";
import {Observable, of} from 'rxjs';
import {delay, find} from 'rxjs/internal/operators';
import { first, tap, filter, map } from 'rxjs/operators';
import { from } from 'rxjs';
import {ValidationErrors} from '@angular/forms/src/directives/validators';

export function asyncUserExistValidator(userService:MockedusersService): AsyncValidatorFn {
    return (control: AbstractControl):  Observable<ValidationErrors | null> => {
      return userService.checkUsername(control.value as string).pipe(
        tap(x => console.log('user found is: '+ x) ),
      map(x => x ? {useralreadyexists:true} : null));
  
    }   
    }