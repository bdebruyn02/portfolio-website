import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { portfolioData } from '../../types/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [ExperienceComponent]
})
export class HomePageComponent  {
  private dataService = inject(DataService);

  portfolioData: portfolioData = this.dataService.portfolioData();
}
