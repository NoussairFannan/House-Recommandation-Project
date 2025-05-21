import { Routes } from '@angular/router';
import { PredictFormComponent } from './components/predict-form/predict-form.component';
import { HouseCreateComponent } from './components/house-create/house-create.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { RecommendationListComponent } from './components/recommendation-list/recommendation-list.component';
import { HomeComponent } from './components/home/home.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'predict', component: PredictFormComponent },
  { path: 'houses', component: HouseListComponent },
  { path: 'houses/create', component: HouseCreateComponent },
  { path: 'houses/:id', component: HouseDetailComponent },
  { path: 'recommendations', component: RecommendationListComponent }
];
