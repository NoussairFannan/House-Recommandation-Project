import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HouseService } from '../../services/house.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-house-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent {
  houseForm: FormGroup;
  loading = false;
  error: string | null = null;
  success = false;

  constructor(
    private fb: FormBuilder,
    private houseService: HouseService,
    private router: Router
  ) {
    this.houseForm = this.fb.group({
      rm: ['', [Validators.required, Validators.min(1)]],
      lstat: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      dis: ['', [Validators.required, Validators.min(0)]],
      tax: ['', [Validators.required, Validators.min(0)]],
      ptratio: ['', [Validators.required, Validators.min(0)]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      indus: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      medv: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.houseForm.valid) {
      this.loading = true;
      this.error = null;
      this.success = false;

      const formData = {
        rm: Number(this.houseForm.get('rm')?.value),
        lstat: Number(this.houseForm.get('lstat')?.value),
        dis: Number(this.houseForm.get('dis')?.value),
        tax: Number(this.houseForm.get('tax')?.value),
        ptratio: Number(this.houseForm.get('ptratio')?.value),
        age: Number(this.houseForm.get('age')?.value),
        indus: Number(this.houseForm.get('indus')?.value),
        medv: Number(this.houseForm.get('medv')?.value)
      };

      this.houseService.createHouse(formData).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          this.houseForm.reset();
          setTimeout(() => {
            this.router.navigate(['/houses']);
          }, 2000);
        },
        error: (err) => {
          this.error = 'Une erreur est survenue lors de la création de la maison.';
          this.loading = false;
        }
      });
    }
  }
} 