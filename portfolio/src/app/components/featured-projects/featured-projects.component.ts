import { Component, Input, input, OnInit } from '@angular/core';
import { IonCard, IonCardContent } from "@ionic/angular/standalone";
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { projectT } from '../../types/types';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, MatCardModule, MatIconModule, CarouselModule, NgOptimizedImage]
})
export class FeaturedProjectsComponent implements OnInit{
  featuredProjects = input<projectT[]>([]);

  responsiveOptions: CarouselResponsiveOptions[] = [
    {
        breakpoint: '1920px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1536px',
        numVisible: 3,
        numScroll: 1
    },
    {
      breakpoint: '1440px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
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
