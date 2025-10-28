import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Weather {
  private apiKey = '11eacea161c12aca27cfdde1e32d587c';
  private apiURL = 'https://api.weatherstack.com/current';

  constructor(private https: HttpClient){}

  getWeather(city: string): Observable<any>{
    const url = `${this.apiURL}?access_key=${this.apiKey}&query=${city}`;
    return this.https.get(url);
  }
}


