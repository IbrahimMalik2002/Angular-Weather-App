// weather.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='; // Updated API URL
  private apiKey = '3566ef8971dd7f972dc79046312b995d'; // Replace with your API key

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const url = `${this.apiUrl}${city}&appid=${this.apiKey}&units=metric`; // Updated URL with dynamic city
    return this.http.get(url);
  }
}
