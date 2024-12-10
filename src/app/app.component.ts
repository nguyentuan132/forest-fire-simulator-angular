import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { interval, Subscription } from 'rxjs';
import { Forest } from './model';
import { ForestService } from './services/forest.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Simulation de Feu de Forêt';

  autoRunning = false;  // Flag to indicate if auto-run is active
  autoRunSubscription!: Subscription;  // Holds the subscription for the auto-run interval

  simulationSteps: Forest[] = [];  // Stores the steps of the simulation
  currentStep = 0;  // Current step index in the simulation

  constructor(private readonly forestService: ForestService) { }

  // On component initialization, load the simulation steps
  ngOnInit(): void {
    this.loadSimulation();
  }

  // Loads the simulation steps from the service
  loadSimulation(): void {
    this.forestService.getSimulation().subscribe({
      next: (steps: Forest[]) => {
        this.simulationSteps = steps;  // Save the simulation steps
        this.currentStep = 0;  // Show the first step initially
      },
      error: (err) => {
        console.error('Error fetching simulation steps:', err);
        alert('An error occurred while loading the simulation.');
      }
    });
  }

  // Move to the next step if not at the last step
  nextStep(): void {
    if (this.currentStep < this.simulationSteps.length - 1) {
      this.currentStep++;  // Increase the current step index
    }
  }

  // Move to the previous step if not at the first step
  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;  // Decrease the current step index
    }
  }

  // Toggles the auto-run functionality (starts or stops the simulation)
  toggleAutoRun(): void {
    this.autoRunning ? this.stopAutoRun() : this.startAutoRun();
  }

  // Starts the auto-run and automatically progresses through the simulation
  private startAutoRun(): void {
    this.autoRunning = true;
    this.autoRunSubscription = interval(600).subscribe(() => {
      this.nextStep();
      // Stop auto-run when we reach the last step
      if (this.currentStep === this.simulationSteps.length - 1) {
        this.stopAutoRun();
      }
    });
  }

  // Stops the auto-run and unsubscribes from the interval
  private stopAutoRun(): void {
    this.autoRunning = false;
    this.autoRunSubscription.unsubscribe();
  }

  // Check if the current step is the first one
  get isFirstStep(): boolean {
    return this.currentStep === 0;
  }

  // Check if the current step is the last one
  get isLastStep(): boolean {
    return this.currentStep === this.simulationSteps.length - 1;
  }
}


