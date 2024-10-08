import { Component, inject, input } from '@angular/core';
import { contentType, linksT } from '../../types/types';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider'
import { IonCard, IonCardContent, IonChip } from '@ionic/angular/standalone';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'profile',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule, MatDividerModule, IonChip, IonCardContent, IonCard],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  name = input<string>();
  jobTitle = input<string>();
  location = input<string>();
  links = input<linksT[]>();
  about_me = input<string>();

  time?: string;

  private dataService = inject(DataService);

  constructor() {
    setInterval(() =>{
      const currentDate = new Date();
      this.time = currentDate.toLocaleTimeString("en-ZA", { hour12: true });
    }, 1000);
  }

  downloadResume() {
    this.dataService.download('/brandon_de_bruyn_resume.pdf', {filename: 'brandon_de_bruyn_resume', extension: '.pdf', contentType: contentType.ApplicationPdf });
  }
}
