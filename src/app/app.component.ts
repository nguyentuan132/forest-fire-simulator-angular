import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForestService } from './services/forest.service';
import { CommonModule } from '@angular/common';
import { Forest } from './model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forest-fire-simulator-angular';

  simulationSteps: Forest[] = []; // Stores the steps of the simulation
  currentStep = 0; // Current step index in the simulation

  constructor(private readonly forestService: ForestService) { }

  // On component initialization, load the simulation steps
  ngOnInit(): void {
    this.loadSimulation();
  }

  // Loads the simulation steps from the service
  private loadSimulation(): void {
    this.forestService.getSimulation().subscribe({
      next: (steps: Forest[]) => {
        this.simulationSteps = steps; // Save the simulation steps
        this.currentStep = 0; // Show the first step initially
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
      this.currentStep++; // Increase the current step index
    }
  }

  // Move to the previous step if not at the first step
  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--; // Decrease the current step index
    }
  }

  // Check if the current step is the first one
  isFirstStep(): boolean {
    return this.currentStep === 0; // Return true if we are at the first step
  }

  // Check if the current step is the last one
  isLastStep(): boolean {
    return this.currentStep === this.simulationSteps.length - 1; // Return true if we are at the last step
  }
}
