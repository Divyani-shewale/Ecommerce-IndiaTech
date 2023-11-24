import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageSubscriptionService {

  constructor( private http:HttpClient) { }

  // manage subscription plans
  GetsubPlan(user: any): Observable<any> {
    console.log("user----", user)
    return this.http.post(environment.apiUrl + "managesubscription/manage-plans", user)
  }

  Getsubmanagmenet(user: any): Observable<any> {
    console.log("user----", user)
    return this.http.post(environment.apiUrl + "managesubscription/subscription-management", user)
  }

  Getsubcoupons(user: any): Observable<any> {
    console.log("user----", user)
    return this.http.post(environment.apiUrl + "managesubscription/coupons-offers", user)
  }

}
