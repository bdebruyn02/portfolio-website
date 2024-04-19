import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinksT, ProfileComponent } from './components/profile/profile.component';
import { EducationAndWorkHistoryComponent } from './components/education-and-work-history/education-and-work-history.component';
import { SkillsAndProjectsComponent } from './components/skills-and-projects/skills-and-projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent, EducationAndWorkHistoryComponent, SkillsAndProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  links: Array<LinksT> = [{icon: 'logo-github', href: 'https://github.com/LordTiger', name: 'Github'}]
}
