import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../interfaces/house.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[] = [];
  loading = false;
  error: string | null = null;
  types: string = '';

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.loadHouses();
    this.getHouseType(this.houses[0].rm, this.houses[0].id);
  }

  loadHouses() {
    this.loading = true;
    this.error = null;

    this.houseService.getHouses().subscribe({
      next: (houses) => {
        this.houses = houses;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Une erreur est survenue lors du chargement des maisons.';
        this.loading = false;
      }
    });
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
} 