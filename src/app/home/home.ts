import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Weather } from '../services/weather';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private weatherService: Weather){}

  getWeather(){
    this.weatherData = null;
    this.errorMessage = '';

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: () => {
        this.errorMessage = 'City Not found or API Error';
      }
    });
  }

  saveCity() {
  if (!this.weatherData?.location?.name) return;

  const savedCities = JSON.parse(localStorage.getItem('savedCities') || '[]');

  if (!savedCities.includes(this.weatherData.location.name)) {
    savedCities.push(this.weatherData.location.name);
    localStorage.setItem('savedCities', JSON.stringify(savedCities));
    alert(`${this.weatherData.location.name} saved!`);
  } else {
    alert(`${this.weatherData.location.name} is already saved.`);
  }
  }
}
