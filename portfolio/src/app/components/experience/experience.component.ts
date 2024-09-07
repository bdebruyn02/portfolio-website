import { Component, input, OnInit } from '@angular/core';
import { IonCard, IonCardContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { experience } from '../../types/types';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, MatCardModule]
})
export class ExperienceComponent {
  experience = input<experience[]>();
}
