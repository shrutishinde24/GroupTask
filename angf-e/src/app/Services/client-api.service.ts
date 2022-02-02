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
}
