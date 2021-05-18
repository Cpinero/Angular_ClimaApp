import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URI: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private apiKey:string = 'dedd51c201b3a82920c899f56734e1c8';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string, countryCode: string){
    return this.http.get(`${this.URI}${cityName},${countryCode}&units=metric&appid=${this.apiKey}`);
  }
}
