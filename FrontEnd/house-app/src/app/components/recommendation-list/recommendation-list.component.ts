import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../interfaces/house.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recommendation-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.css']
})
export class RecommendationListComponent implements OnInit {
  recommendations: House[] = [];
  loading = false;
  error: string | null = null;
  targetPrice: number = 50000; // Prix par défaut en dirhams
  types: string = '';

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.loadRecommendations();
  }

  getHouseImage(rooms: number | undefined, id: number | undefined): string {
    if (rooms === undefined || id === undefined) {
      return 'assets/images/appartements/appartement-1.jpg';
    }

    const storageKey = `house_image_${id}`;
    const storedImage = localStorage.getItem(storageKey);
    
    if (storedImage) {
      return storedImage;
    }
    
    const type = this.getHouseType(rooms, id);
    let imagePath: string;
    switch(type) {
      case 'Appartement':
        const appartementIndex = Math.floor(Math.random() * 3) + 1;
        imagePath = `assets/images/appartements/appartement-${appartementIndex}.jpg`;
        break;
      case 'Maison':
        const maisonIndex = Math.floor(Math.random() * 3) + 1;
        imagePath = `assets/images/appartements/appartement-${maisonIndex}.jpg`;
        break;
      case 'Villa':
        const villaIndex = Math.floor(Math.random() * 3) + 1;
        imagePath = `assets/images/villes/villa-${villaIndex}.jpg`;
        break;
      case 'Bureau':
        const bureauIndex = Math.floor(Math.random() * 3) + 1;
        imagePath = `assets/images/offices/office-${bureauIndex}.jpg`;
        break;
      default:
        imagePath = `assets/images/appartements/appartement-1.jpg`;
    }

    localStorage.setItem(storageKey, imagePath);
    return imagePath;
  }

  getHouseType(rooms: number | undefined, id: number | undefined): string {
    if (rooms === undefined || id === undefined) {
      return 'Appartement';
    }

    const storageKey = `house_type_${id}`;
    const storedType = localStorage.getItem(storageKey);
    
    if (storedType) {
      this.types = storedType;
      return storedType;
    }

    const types = ['Appartement', 'Maison', 'Villa', 'Bureau'];
    const randomIndex = Math.floor(Math.random() * types.length);
    this.types = types[randomIndex];
    
    localStorage.setItem(storageKey, this.types);
    return this.types;
  }

  loadRecommendations() {
    this.loading = true;
    this.error = null;

    this.houseService.getRecommendations(this.targetPrice*10).subscribe({
      next: (recommendations) => {
        this.recommendations = recommendations;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Une erreur est survenue lors du chargement des recommandations.';
        this.loading = false;
      }
    });
  }
} 