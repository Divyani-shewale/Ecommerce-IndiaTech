import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './loader.service';
import { CommonFunctionService } from '@services/common-function.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public options: any;
  public headers_object: any;
  
  constructor(public http: HttpClient,private router: Router,private toastr: ToastrService,private utilities: CommonFunctionService,public loaderService: LoaderService) {}
  
  initHeaders() {
    this.headers_object = new HttpHeaders();
    if (localStorage.getItem('personalDetails')) {
      let personalData = JSON.parse(localStorage.getItem('personalDetails'));
      this.headers_object = this.headers_object.append('LoginToken', personalData['LoginToken']);
      this.headers_object = this.headers_object.append('userId', personalData['UserId']);
      let urlPath = window.location.pathname;
      if(urlPath.includes('/users/playerdetailview'))
      {
        urlPath = '/users/playerdetailview';
      }
      else if(urlPath.includes('/creator/dcpromotion'))
      {
        urlPath = '/creator/dcpromotion';
      }
      else if(urlPath.includes('/creator/reel-history'))
      {
        urlPath = '/creator/reel-history';
      }
      this.headers_object = this.headers_object.append('sitePath',urlPath);
    }
    this.options = {
      headers: this.headers_object
    };
  }
  
  // initHeadersBlob() {
  //   this.headers_object = new HttpHeaders();
  //   if (localStorage.getItem('personalDetails')) {
  //     let companyData = JSON.parse(localStorage.getItem('personalDetails'));
  //     this.headers_object = this.headers_object.append('UserId', companyData['UserId']);
  //     this.headers_object = this.headers_object.append('LoginToken', companyData['LoginToken']);
  //     this.headers_object = this.headers_object.append('AdminUserId', companyData['AdminUserId']);
  //     this.headers_object = this.headers_object.append('responseType', 'blob' as 'json');
  //     let urlPath = window.location.pathname;
  //     if(urlPath.includes('/users/playerdetailview'))
  //     {
  //       urlPath = '/users/playerdetailview';
  //     }
  //     this.headers_object = this.headers_object.append('sitePath',urlPath);
  //   }
  //   this.options = {
  //     headers: this.headers_object
  //   };
  // }
  
  sendRequest(apiEndpoint: string, body?: any,apiId?:string):Observable<any> {
    this.initHeaders();
    this.loaderService?.startLoading(apiId);
    return this.http.get(environment.apiUrl + "overviewChart", body).pipe(tap(response => {
      this.loaderService?.stopLoading(apiId);
    }),catchError(error => {
      this.loaderService?.stopLoading(apiId);
      throw this.handleError(error);
    })
    );
  }

  // getOverviewData() : Observable<any>{
  //   return this.http.get(environment.apiUrl+"overviewChart")
  //   }
    getOverviewChart(): Observable<any>{
      return this.http.get(environment.apiUrl+"overviewChart")
    }

  dummyRequest(apiEndpoint: string, body?: any,apiId?:string):Observable<any> {
    this.loaderService?.startLoading(apiId);
    let dres=[{key:'key'}];
    setTimeout(() => {
      this.loaderService?.stopLoading(apiId);
    }, 2000);
    return of(dres).pipe(delay(2000));
    // return of(dres);
  }
  
  // putRequest(apiEndpoint: string, body?: any) {
  //   this.initHeaders();
  //   return this.http.put(environment.apiUrl + apiEndpoint, body, this.options).pipe(catchError(error => {
  //     throw this.handleError(error);
  //   })
  //   );
  // }
  
  getRequest(apiEndpoint: string,apiId?:string) {
    this.initHeaders();
    this.loaderService?.startLoading(apiId);
    return this.http.get(environment.apiUrl + apiEndpoint, this.options).pipe(tap(response => {
      this.loaderService?.stopLoading(apiId);
    }),
    catchError(error => {
      this.loaderService?.stopLoading(apiId);
      throw this.handleError(error);
    })
    );
  }

  createdata(user:any): Observable<any>{
    return this.http.post(environment.apiUrl,user)
  }
  
  // getRequestBlob(apiEndpoint: string) {
  //   this.initHeadersBlob();
  //   return this.http.get(environment.apiUrl + apiEndpoint, this.options).pipe(catchError(error => {
  //     throw this.handleError(error);
  //   })
  //   );
  // }
  
  exportExcel = async (apiEndpoint: any,docname:any, apiId?:string) => {
    this.loaderService?.startLoading(apiId);
    let companyData = JSON.parse(localStorage.getItem('personalDetails'));
    let urlPath = window.location.pathname;
    if(urlPath.includes('/users/playerdetailview'))
    {
      urlPath = '/users/playerdetailview';
    }
    let request = {headers: {'LoginToken': companyData['LoginToken'],'UserId': companyData['UserId'],'sitePath':urlPath}};
    fetch(environment.apiUrl+apiEndpoint,request).then((response) => response.blob()).then((blob) => {
      this.loaderService?.stopLoading(apiId);
      let _url = window.URL.createObjectURL(blob);
      const filename = docname;
      const link = document.createElement('a');
      link.href = _url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(_url);
    }).catch((err) => {
      this.loaderService?.stopLoading(apiId);
      this.toastr.warning('','Please try again', {positionClass: 'toast-top-center'});
      console.log(err);
    });
  };
  
  handleError(error: HttpErrorResponse) {
    if(error.status==401){
      this.utilities.clearLocalVars();
      this.toastr.warning('Invalid access detected','Sign In Again !', {positionClass: 'toast-top-center'});
      this.router.navigate(['/login']);
    }
    let errorMsg: string;
    if (error.error instanceof ErrorEvent) {
      errorMsg='An error occurred:', error.error.message;
    } else {
      errorMsg=`Backend returned code ${error.status}, `+`body was: ${error.error}`;
    }
    return throwError(() => new Error(errorMsg));
  }
}