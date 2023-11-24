import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http:HttpClient) { }

 
  updateuser(user:any): Observable<any>{
    console.log("user----",user)    
    return this.http.put(environment.apiUrl+"userSubscriber/"+user.id,user)
  }

  deleteuser(id:any): Observable<any>{
    console.log("user----",id)    
    return this.http.delete(environment.apiUrl+"userSubscriber/"+id,)
  }

  

  GetUserById(ID:any) : Observable<any>{
    return this.http.get(environment+"userSubscriber/"+ID)
    }

  getallsubscribeuser() : Observable<any>{
    return this.http.get(environment.apiUrl+"userSubscriber")
    }

  

  getOverviewData(id) : Observable<any>{
  return this.http.post(environment.apiUrl+"dashboard/overview"+id,{})
  }
  getOverviewChart(): Observable<any>{
    return this.http.get(environment.apiUrl+"overviewChart")
  }

  getTrendingTableData111(user:any){
    return this.http.get(environment + "trending",user)
  }

  getTrendingTableData(user:any) : Observable<any>{
    return this.http.post(environment.apiUrl+"dashboard/trending",user)
  }
  getTrendingChart(): Observable<any>{
    return this.http.get(environment.apiUrl+"trendingChart")
  }

  getUserActivity(user:any) : Observable<any>{
    return this.http.post(environment.apiUrl+"dashboard/useractivity",user)
  }
  getUserActivity1(user:any) : Observable<any>{
    return this.http.post(environment.apiUrl+"dashboard/useractivity1",user)
  }

  getPaymentInfo(user:any) : Observable<any>{
    return this.http.post(environment.apiUrl+"dashboard/paymentinfo",user)
  }

  getPaymentChart() : Observable<any>{
    return this.http.get(environment.apiUrl+"paymentchart")
  }

  getMonetization(user:any) : Observable<any>{
    return this.http.post(environment.apiUrl+"dashboard/monitization",user)
  }

//                    Manage Reports
//............Content Performance Report...............//
getContentPerformanceReport(user:any):Observable<any> {
  return this.http.post(environment.apiUrl + "managereport/contentPerformance",user)
}

}

