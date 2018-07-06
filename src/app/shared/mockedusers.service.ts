import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay, find} from 'rxjs/internal/operators';
import { first, tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class MockedusersService {
private _userNames = of(['vasya','petya','sasha']);
  constructor() { }

  public getUserNames():Observable<string[]> 
  { return  this._userNames;}
  
 
  

  public checkUsername(name:string):Observable<boolean> 
  { return  this._userNames.pipe(delay(1000),
    first(x=>x.includes(name.toLowerCase()), null),
  map((x)=>!!x ));
}
  
 
  
}