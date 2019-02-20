import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ialbum } from '../app/interfaces/album';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base = 'http://localhost:8080/avaBavely/public/';
  constructor(private http: HttpClient) { }
  getAlbums(): Observable<Ialbum[]> {
    return this.http.get<Ialbum[]>(this.base + 'getAlbums');
  }
}
