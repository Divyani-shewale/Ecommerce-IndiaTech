import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageContentService {

  constructor(private http:HttpClient) { }

//............... Stepper ...................//
createcontentinfo(user:any): Observable<any>{
  return this.http.post(environment.apiUrl +"managecontent/ContentInformation/",user)
}

editcontentinfo(formValue:any): Observable<any>{
  console.log("formValue====",formValue.part_content);  
  return this.http.put(environment.apiUrl +"managecontent/ContentInformation/"+formValue.id,formValue)
}

getcontentdata(user:any) : Observable<any>{
  return this.http.post(environment.apiUrl+"managecontent/ContentInformation",user)
}
  
GetcontentdataById(ID:any) : Observable<any>{
  return this.http.get(environment.apiUrl+"ContentInformation/"+ID)
}

getcontentparts(user:any) : Observable<any>{
  return this.http.post(environment.apiUrl+"managecontent/contentparts",user)
}

createcontentparts(user:any): Observable<any>{
  return this.http.post(environment.apiUrl +"managecontent/contentparts/",user)
}

getcontenttrailor(user:any) : Observable<any>{
  return this.http.post(environment.apiUrl+"managecontent/contenttrailor",user)
}

createcontenttrailor(user:any): Observable<any>{
  return this.http.post(environment.apiUrl +"managecontent/contenttrailor/",user)
}

getcontentupload(user:any) : Observable<any>{
  return this.http.post(environment.apiUrl+"managecontent/contentupload",user)
}

createcontentupload(user:any): Observable<any>{
  return this.http.post(environment.apiUrl +"managecontent/contentupload/",user)
}

getcontentconfiguration(user:any) : Observable<any>{
  return this.http.post(environment.apiUrl+"managecontent/contentconfiguration",user)
}

createcontentconfiguration(user:any): Observable<any>{
  return this.http.post(environment.apiUrl +"managecontent/contentconfiguration/",user)
}

getcontentfuture(user:any) : Observable<any>{
  return this.http.post(environment.apiUrl+"managecontent/futurecontent",user)
}

createcontentfuture(user:any): Observable<any>{
  return this.http.post(environment.apiUrl +"managecontent/Futurecontent/",user)
}
   
//...........manage-contents-library..................//
getContentLibrary(user:any): Observable<any> {
  return this.http.post(environment.apiUrl + "managecontent/movie_library",user)
}
deleteContentLibraryById(id: any): Observable<any> {
  console.log("user----", id)
  return this.http.delete(environment.apiUrl + "managecontent/movie_library/" + id)
}
getContentLibraryCreate(user: any): Observable<any> {
  console.log("user----", user)
  return this.http.post(environment.apiUrl + "managecontent/movie_library/", user)
}
getContentLibraryById(ID: any): Observable<any> {
  return this.http.get(environment.apiUrl + "managecontent/movie_library/" + ID)
}
getContentLibraryUpdate(user: any): Observable<any> {
  console.log("user----", user)
  return this.http.put(environment.apiUrl+"managecontent/movie_library/" + user.id, user)
}

//.............Manage Content Section ...............//


getContentSectionTable(user:any): Observable<any> {
  return this.http.post(environment.apiUrl + "managecontent/get_content_library_details",user)
}
getContentSection(user:any): Observable<any> {
  return this.http.post(environment.apiUrl + "managecontent/content_section",user)
}

getMatchLibraryDetails(user:any): Observable<any> {
  return this.http.post(environment.apiUrl + "managecontent/get_content_library_details",user)
}

getLibraryData(user:any): Observable<any> {
  return this.http.post(environment.apiUrl + "managecontent/movie_library",user)
}
 
getMovieData(user:any): Observable<any> {
  return this.http.post(environment.apiUrl + "managecontent/get_movie_data",user)
}


  createLibraryData(user: any): Observable<any> {
    console.log("user----", user)
    return this.http.post(environment.apiUrl + "managecontent/get_content_library_details/", user)
  }

deleteBanerByID(ID: any): Observable<any> {
  return this.http.delete(environment.apiUrl + "managecontent/get_content_library_details/" + ID)
}

getLibraryMoviesById(ID: any): Observable<any> {
  return this.http.get(environment.apiUrl + "managecontent/get_content_library_details/"+ID)
}

getPosters(user:any): Observable<any> {
  return this.http.post(environment.apiUrl + "managecontent/library_wise_library_details",user)
}


  createContentType(user: any): Observable<any> {
    console.log("user----", user)
    return this.http.post(environment.apiUrl + "managecontent/content_section/", user)
  }

//.....................home banner.........................//

  homeSliderData(user:any): Observable<any> {
    return this.http.post(environment.apiUrl + "managecontent/get_admin_homeslider_data",user)
  }

  edithomeSliderDataByID(user: any): Observable<any> {
    console.log("user----", user)
    return this.http.put(environment.apiUrl + "managecontent/get_admin_homeslider_data/", user)
  }

  createhomeSliderData(user: any): Observable<any> {
    console.log("user----", user)
    return this.http.post(environment.apiUrl + "managecontent/get_admin_homeslider_data/", user)
  }

}
