import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forest } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ForestService {
  private readonly apiUrl = 'http://localhost:8080/api/simulation/simulate';

  constructor(private readonly http: HttpClient) { }

  getSimulation(): Observable<Forest[]> {
    return this.http.get<Forest[]>(this.apiUrl);
  }
}
