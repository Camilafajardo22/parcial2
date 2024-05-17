import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { EspecieDetail } from './especieDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {


  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getEspecies(): Observable<EspecieDetail[]> {
    return this.http.get<EspecieDetail[]>(this.baseUrl);
  } 

}
