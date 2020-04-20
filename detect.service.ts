import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetectService {

  constructor(private http: HttpClient) { }
  Detect(data): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
        // 'Access-Control-Allow-Origin':'*'
      })
    };
    return this.http.post('http://us-central1-velvety-rookery-274308.cloudfunctions.net/function-1', data,httpOptions)
  }
}
