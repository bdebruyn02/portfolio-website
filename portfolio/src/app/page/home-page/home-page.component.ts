import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { portfolioData, projectT } from '../../types/types';
import { FeaturedProjectsComponent } from '../../components/featured-projects/featured-projects.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DetectorService } from '../../services/detector.service';
import { debounceTime, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [ExperienceComponent, FeaturedProjectsComponent, FooterComponent]
})
export class HomePageComponent implements OnInit {
  portfolioData?: portfolioData;
  featuredProjects: projectT[] = [];
  detector = inject(DetectorService);

  private dataService = inject(DataService);
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.detector.checkDevice();

    fromEvent(window, 'resize').pipe(takeUntilDestroyed(this.destroyRef), debounceTime(200)).subscribe(() => this.detector.checkDevice());
  }

  ngOnInit(): void {
    this.portfolioData = this.dataService.portfolioData();

    this.featuredProjects = this.portfolioData.projects?.filter(x => x.feature) ?? [];
  }


}
