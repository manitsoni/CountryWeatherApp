import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import {map,catchError,count} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  countryDetails:any;
  constructor(
    private http:HttpClient
  ) { }
  getData(url:string,options?:any){
    return this.http.get<any>
    (url,options?options:"").pipe(
      map(data=>{
        return data;
      }),
      catchError(err =>{
         return err
      })
    )
  }
}
