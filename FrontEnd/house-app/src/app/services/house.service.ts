import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House, PredictionRequest, PredictionResponse } from '../interfaces/house.interface';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private apiUrl = 'http://localhost:8000'; // Base API URL

  constructor(private http: HttpClient) { }

  predictPrice(data: PredictionRequest): Observable<PredictionResponse> {
    return this.http.post<PredictionResponse>(`${this.apiUrl}/predict`, data);
  }

  createHouse(house: House): Observable<House> {
    return this.http.post<House>(`${this.apiUrl}/homes`, house);
  }

  getHouses(skip: number = 0, limit: number = 100): Observable<House[]> {
    return this.http.get<House[]>(`${this.apiUrl}/homes`, {
      params: { skip: skip.toString(), limit: limit.toString() }
    });
  }

  getHouseById(id: number): Observable<House> {
    return this.http.get<House>(`${this.apiUrl}/homes/${id}`);
  }

  getRecommendations(price: number, limit: number = 20): Observable<House[]> {
    return this.http.get<House[]>(`${this.apiUrl}/recommendation`, {
      params: { price: price.toString(), limit: limit.toString() }
    });
  }
}
