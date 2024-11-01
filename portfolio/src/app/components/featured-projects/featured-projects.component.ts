import { Component, Input, input, OnInit } from '@angular/core';
import { IonCard, IonCardContent } from "@ionic/angular/standalone";
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { projectT } from '../../types/types';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CurrentDevice } from '../../services/detector.service';
@Component({
  selector: 'featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, MatCardModule, MatIconModule, CarouselModule, NgOptimizedImage, MatTooltipModule]
})
export class FeaturedProjectsComponent implements OnInit{
  device = input<CurrentDevice>('Desktop');
  
  featuredProjects = input<projectT[]>([]);

  responsiveOptions: CarouselResponsiveOptions[] = [
    {
        breakpoint: '2080px',
        numVisible: 3,
        numScroll: 1
    },
    {
      breakpoint: '1665px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1200px',
      numVisible: 1,
      numScroll: 1
  }
  ];

  private window = window;

  goToLink(href: string) {
    this.window.open(href, '_blank')
  }

  ngOnInit(): void {
  
  }

}
