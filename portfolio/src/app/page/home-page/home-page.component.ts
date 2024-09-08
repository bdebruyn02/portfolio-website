import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { portfolioData, projectT } from '../../types/types';
import { FeaturedProjectsComponent } from '../../components/featured-projects/featured-projects.component';
import { FooterComponent } from '../../components/footer/footer.component';

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

  private dataService = inject(DataService);

  ngOnInit(): void {
    this.portfolioData = this.dataService.portfolioData();

    this.featuredProjects = this.portfolioData.projects?.filter(x => x.feature) ?? [];
  }


}
