import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forest } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ForestService {
  private readonly simulateEndpoint = 'http://localhost:8080/api/simulation/simulate';

  constructor(private readonly http: HttpClient) { }

  /**
   * Fetches the forest fire simulation steps.
   * @returns {Observable<Forest[]>} An observable of the forest states during simulation.
   */
  getSimulation(): Observable<Forest[]> {
    return this.http.get<Forest[]>(this.simulateEndpoint);
  }
}
