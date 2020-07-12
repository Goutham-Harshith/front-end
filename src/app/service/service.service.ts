import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  
  
  secondRequest()
  {
    return this.http.get("https://full-stack-1997.herokuapp.com/getObject");
  // return this.http.get("http://localhost:8080/getObject");
  }
}
