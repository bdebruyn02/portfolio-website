import { Component, input, OnInit } from '@angular/core';
import { IonCard, IonCardContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { projectT } from '../../types/types';

@Component({
  selector: 'featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, MatCardModule, MatIconModule]
})
export class FeaturedProjectsComponent implements OnInit{
  featuredProjects = input<projectT[]>();

  private window = window;

  goToLink(href: string) {
    this.window.open(href, '_blank')
  }

  ngOnInit(): void {
  
  }

}
