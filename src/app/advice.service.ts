import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private url = 'https://api.adviceslip.com/advice';
  constructor(private http:HttpClient) { }

  getAdvices(){
    return this.http.get(this.url)
  }
}
