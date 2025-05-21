import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HouseService } from '../../services/house.service';
import { PredictionResponse } from '../../interfaces/house.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-predict-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './predict-form.component.html',
  styleUrls: ['./predict-form.component.css']
})
export class PredictFormComponent {
  predictionForm: FormGroup;
  predictionResult: PredictionResponse | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private houseService: HouseService
  ) {
    this.predictionForm = this.fb.group({
      rm: ['', [Validators.required, Validators.min(1)]],
      lstat: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      dis: ['', [Validators.required, Validators.min(0)]],
      tax: ['', [Validators.required, Validators.min(0)]],
      ptratio: ['', [Validators.required, Validators.min(0)]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      indus: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  onSubmit() {
    if (this.predictionForm.valid) {
      this.loading = true;
      this.error = null;
      this.predictionResult = null;

      this.houseService.predictPrice(this.predictionForm.value).subscribe({
        next: (response) => {
          this.predictionResult = response;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Une erreur est survenue lors de la prédiction.';
          this.loading = false;
        }
      });
    }
  }
} 