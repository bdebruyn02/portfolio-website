import { Component } from '@angular/core';
import { LinksT, ProfileComponent } from './components/profile/profile.component';
import { EducationAndWorkHistoryComponent } from './components/education-and-work-history/education-and-work-history.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent, EducationAndWorkHistoryComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  links: Array<LinksT> = [
    { name: 'View Github Profile', href: 'https://github.com/LordTiger', icon: 'logo-github' },
    { name: 'Download Resume', href: 'https://drive.google.com/file/d/1ivT9rXfcjPebL6HAlUwQv1k0iCfkuaff/view', icon:'cloud-download-outline'},
    { name: 'View Linkedin Profile', href: 'https://www.linkedin.com/in/bdebruyn/', icon: 'logo-linkedin'}
  ]

  about_me: string = `Hi, I'm Brandon, a full-stack developer with a strong passion for coding. My primary tech stack includes ASP.NET and ASP.NET Web API, .NET Framework, C#, TypeScript, JavaScript, Angular, 
  SCSS, CSS, Ionic, Firebase, and Microsoft SQL. I strive for excellence in all my projects and am dedicated to staying updated with the latest advancements in technology.`;

  skills: Array<string> = ['Microsoft SQL', 'ASP.NET Web API', 'Angular', 'Firebase', 'JavaScript', 'TypeScript', "C#", 'Ionic', ".NET Core", "ASP.NET MVC", "Git"];
}
