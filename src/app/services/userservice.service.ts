import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  readonly url = "http://localhost:3000/"

  constructor( private http:HttpClient) { }

  getuserData() : Observable<any>{
    return this.http.get(this.url+"userSubscriber")
    }
}
