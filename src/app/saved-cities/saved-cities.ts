import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-saved-cities',
  standalone: true,
  imports: [RouterOutlet,RouterLink, CommonModule],
  templateUrl: './saved-cities.html',
  styleUrl: './saved-cities.css',
})
export class SavedCities implements OnInit {
  savedCities: string[] = [];

  ngOnInit() {
    this.savedCities = JSON.parse(localStorage.getItem('savedCities') || '[]');
  }

  removeCity(index: number) {
    const cityName = this.savedCities[index];
    if (confirm(`Remove ${cityName} from saved cities?`)) {
      this.savedCities.splice(index, 1);
      localStorage.setItem('savedCities', JSON.stringify(this.savedCities));
    }
  }
}
