import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { House } from '../../interfaces/house.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house: House | null = null;
  loading = false;
  error: string | null = null;
  types: string = '';

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService
  ) {}

  ngOnInit() {
    this.loadHouseDetails();
  }

  getHouseImage(rooms: number | undefined): string {
    if (rooms === undefined || this.house?.id === undefined) {
      return 'assets/images/appartements/appartement-1.jpg';
    }

    const storageKey = `house_image_${this.house.id}`;
    const storedImage = localStorage.getItem(storageKey);
    
    if (storedImage) {
      return storedImage;
    }

    // Si l'image n'est pas dans le localStorage, on retourne une image par défaut
    return 'assets/images/appartements/appartement-1.jpg';
  }

  getHouseType(rooms: number | undefined): string {
    if (rooms === undefined || this.house?.id === undefined) {
      return 'Appartement';
    }

    const storageKey = `house_type_${this.house.id}`;
    const storedType = localStorage.getItem(storageKey);
    
    if (storedType) {
      this.types = storedType;
      return storedType;
    }

    // Si le type n'est pas dans le localStorage, on retourne un type par défaut
    return 'Appartement';
  }

  loadHouseDetails() {
    this.loading = true;
    this.error = null;

    const houseId = this.route.snapshot.paramMap.get('id');
    if (!houseId) {
      this.error = 'ID de la maison non trouvé';
      this.loading = false;
      return;
    }

    this.houseService.getHouseById(parseInt(houseId)).subscribe({
      next: (house) => {
        this.house = house;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Une erreur est survenue lors du chargement des détails de la maison.';
        this.loading = false;
      }
    });
  }
}
