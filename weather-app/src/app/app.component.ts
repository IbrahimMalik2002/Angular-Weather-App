// app.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weatherApp: any;
  selectedCity: string = 'Lahore'; // Set default city
  sum: string = '';
  tem: number = 0;
  tem_min: number = 0;
  tem_max: number = 0;
  pre: number = 0;
  hum: number = 0;
  feel: number = 0;
  loading: boolean = false;
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // Initialize with default location (Lahore)
    this.getWeather();
  }

  getWeather() {
    this.loading = true;
    this.error = '';
    this.weatherService.getWeather(this.selectedCity).subscribe({
      next: (app) => {
        console.log(app);
        this.weatherApp = app;
        this.sum = this.weatherApp.weather[0].main;
        this.tem = this.weatherApp.main.temp;
        this.tem_min = this.weatherApp.main.temp_min;
        this.tem_max = this.weatherApp.main.temp_max;
        this.pre = this.weatherApp.main.pressure;
        this.hum = this.weatherApp.main.humidity;
        this.feel = this.weatherApp.main.feels_like;
      },
      error: (err) => {
        console.log(err.message);
        this.error = 'Failed to fetch weather data. Please try again.';
      },
      complete: () => {
        console.info('API completed');
        this.loading = false;
      }
    });
  }
  updateCityName() {
    // Optional: You can perform additional logic here if needed
    this.getWeather(); // This will trigger the weather update when the city is changed
  }
}
