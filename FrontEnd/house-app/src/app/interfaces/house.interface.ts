export interface House {
  id?: number;
  rm: number; // Average number of rooms per dwelling
  lstat: number; // % Lower-status of the population
  dis: number; // Weighted distances to five Boston employment centres
  tax: number; // Full-value property-tax rate per $10,000
  ptratio: number; // Pupil-teacher ratio by town
  age: number; // % Owner-occupied units built prior to 1940
  indus: number; // Proportion of non-retail business acres per town
  medv?: number; // Median value of owner-occupied homes in $1000s
}

export interface PredictionRequest {
  rm: number;
  lstat: number;
  dis: number;
  tax: number;
  ptratio: number;
  age: number;
  indus: number;
}

export interface PredictionResponse {
  predicted_price_dh: number;
} 