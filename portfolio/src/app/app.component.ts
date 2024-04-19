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

  links: Array<LinksT> = [
    { name: 'Github', href: 'https://github.com/LordTiger',icon: 'logo-github' },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1ivT9rXfcjPebL6HAlUwQv1k0iCfkuaff/view', icon:'cloud-download-outline'}
  ]
}
