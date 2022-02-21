import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  readonly netapiUrl="https://localhost:44375";
  constructor(private http:HttpClient) {}
  //client
  getClient():Observable<any[]>{
    return this.http.get<any>(this.netapiUrl+ `/api/Clients/`);
  }

  getclientbyid(id:number):Observable<any>{
    return this.http.get(this.netapiUrl+`/api/Clients/${id}`)
  }
  clientmeta(id:number,data:any){
    return this.http.put(this.netapiUrl+`/api/Clients/${id}`,data);
  }
  deleteHome(id:number){
    return this.http.delete(this.netapiUrl+`/api/Clients/${id}`)
  }

  clientinvupdate(id:number,data:any){
    return this.http.put(this.netapiUrl+ `/api/inv_delivery/${id}`,data)
  }
  getdistributionbystatus(status:string):Observable<any>{
    return this.http.get(this.netapiUrl+`/api/Distribution/GetStatus/${status}`);

  }
  getdistributionbysearch(invoice:string,clientname:string):Observable<any>{
    return this.http.get(this.netapiUrl+`/api/Distribution/${invoice}/${clientname}`);

  }
}