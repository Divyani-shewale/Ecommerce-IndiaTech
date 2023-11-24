import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './api.service';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  public user: any = null;
  private authLoader = new BehaviorSubject<boolean>(false);
  
  constructor(private router: Router, private toastr: ToastrService, private apiservice :ApiService) {}
  
  async loginByOTP(apiEndpoint:string,{email, password, otpnumber, secretkey},loaderKey:string) {
    try {
      let param = '?Email='+email+'&Password='+password+'&OTPNumber='+otpnumber+"&SecretKey="+secretkey;
      this.authLoader.next(true);
      this.apiservice.getRequest(apiEndpoint + param,loaderKey).subscribe((response: any) => {
      console.log(response)
        if(response.ErrorCode == 1){
          console.log("00000000000",response)
          
          let personalDetails = {FName: response.FName, LName: response.LName, LoginToken: response.LoginToken, UserId: response.UserId, RoleCode:response.RoleCode};
          localStorage.setItem('personalDetails', JSON.stringify(personalDetails));

          let params = config['getAdminMenuMappingsData']+'?UserId='+response.UserId;
          this.apiservice.getRequest(params,'getAdminMenuMappingsData').subscribe((data: any) => {

            let defaultPath='';
            if (data.length > 0) {
              this.convertLinksToLowerCase(data);
              localStorage.setItem('adminMenu', JSON.stringify(data));
              if(data[0].AppUrl!='#')
              {
                defaultPath = (data[0].AppUrl).toLowerCase();
              }
              else
              {
                defaultPath = (data[0].ChildMenu[0].AppUrl).toLowerCase();
              }
              this.router.navigate([defaultPath]);
            }
            else
            {
              this.toastr.error('','Please Try Later',{positionClass: 'toast-top-center'});
            }
          }, (error) => {
            console.log(error);
          });
        }
        else{
          this.toastr.error('',response.ErrorMessage,{positionClass: 'toast-top-center'});
          localStorage.clear();
        }
      })
    } catch (error) {
      this.authLoader.next(false);
      console.log(error);
      this.toastr.error(error.message);
    }
  }
  
  convertLinksToLowerCase(obj:any[]) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
        this.convertLinksToLowerCase(value);
      } else if (key === 'AppUrl') {
        obj[key] = value.toLowerCase();
      }
    }
  }
  
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.user = null;
  }
}