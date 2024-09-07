import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ProfileComponent } from '../../components/profile/profile.component';
import { SkillsAndExperienceComponent } from '../../components/skills-and-experience/skills-and-experience.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [ProfileComponent, SkillsAndExperienceComponent]
})
export class HomePageComponent  {
  data = inject(DataService);

}
