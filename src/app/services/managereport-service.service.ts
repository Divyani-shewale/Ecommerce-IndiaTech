import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagereportServiceService {
  // readonly url = "http://localhost:3000/"


  constructor(private http:HttpClient) { }

  getallsubscribeuser1(user:any): Observable<any>{
    return this.http.post(environment.apiUrl+"managereport/subscriber-user",user)
  }

  GetUserById1(ID:any): Observable<any>{
    return this.http.post(environment.apiUrl+"managereport/subscriber-user",ID)
  }

  getallregistereduser(user:any): Observable<any>{
    return this.http.post(environment.apiUrl+"managereport/registered-user",user)
  }

  getallsubexpireduser(user:any): Observable<any>{
    return this.http.post(environment.apiUrl+"managereport/subscription-expired-user",user)
  }

  getallrevenuedata(user:any): Observable<any>{
    return this.http.post(environment.apiUrl+"managereport/revenuereport",user)
    // return this.http.get(this.url+"Revenuedata/")
  }

  getalldeviceusagedata(user:any): Observable<any>{
    return this.http.post(environment.apiUrl+"managereport/deviceusage",user)
    // return this.http.get(this.url+"Deviceusage/")
  }

  getallsupportdata(user:any): Observable<any>{
    return this.http.post(environment.apiUrl+"managereport/support",user)
    // return this.http.get(this.url+"Supportdata/")
  }
}
