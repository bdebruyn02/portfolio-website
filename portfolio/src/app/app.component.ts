import { TuiRoot } from "@taiga-ui/core";
import { Component} from '@angular/core';
import { LinksT, ProfileComponent } from './components/profile/profile.component';
import { EducationAndWorkHistoryComponent } from './components/education-and-work-history/education-and-work-history.component';
import { ProjectsComponent, ProjectT } from './components/projects/projects.component';
import { AnimationComponent } from './components/animation/animation.component';
import { Skill_ExpT, SkillsAndExperienceComponent } from './components/skills-and-experience/skills-and-experience.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent, EducationAndWorkHistoryComponent, ProjectsComponent, AnimationComponent, SkillsAndExperienceComponent, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  links: Array<LinksT> = [
    { name: 'Github', href: 'https://github.com/LordTiger'},
    { name: 'Linkedin ', href: 'https://www.linkedin.com/in/bdebruyn/'},
    { name: 'Resume', href: 'https://drive.google.com/file/d/1ivT9rXfcjPebL6HAlUwQv1k0iCfkuaff/view' },
  ]
  about_me: string = `Hi, I'm Brandon, a full-stack developer with a strong passion for coding. My primary tech stack includes ASP.NET and ASP.NET Web API, .NET Framework, C#, TypeScript, JavaScript, Angular, 
  SCSS, CSS, Ionic, Firebase, and Microsoft SQL. I strive for excellence in all my projects and am dedicated to staying updated with the latest advancements in technology.`;
 
  skills_exp: Array<Skill_ExpT> = [
    {
      category: 'Backend Development',
      technologies: ['T-SQL', 'ASP.NET Web API', 'ASP.NET MVC', 'ASP.NET Core', 'C#', '.NET']
    },
    {
      category: 'Frontend Development',
      technologies: ['Angular', 'Angular.js', 'JavaScript', 'TypeScript', 'JQuery', 'Ionic', 'SCSS', 'HTML']
    },
    {
      category: 'Database and Deployment',
      technologies: ['Firebase', 'Git ', 'Microsoft SQL']
    }
  ];

  projects: Array<ProjectT> = [
    {
      name: 'FiveM Launcher',
      photoName: 'TDLauncher.png',
      shortDesc: `Built with Angular and Electron, the launcher lets you connect to any FiveM server without opening the FiveM program separately.
                  I noticed people paying for a similar tool unnecessarily and created a free alternative.
                  This project marked my first time combining Angular and Electron, with Electron enabling access to the native system shell for connecting to user-saved servers.`,
      href: 'https://github.com/LordTiger/td-fivem-launcher'
    },
    {
      name: 'Online Chatting App',
      photoName: 'vic_chat.jpg',
      shortDesc: `Built with React and Firebase, this project let's you login through Google or Facebook, with Firebase handling real-time chatting and the authentication.
                  I do not have much to say about the project; as it was more of a learning experience to explore React and Firebase.`,
      href: 'https://github.com/LordTiger/react-chatapp'
    },
    {
      name: 'Bundle of FiveM Scripts',
      photoName: 'fivem_lua_scripts.jpg',
      shortDesc: `Written in Lua, this project contains various scripts to meet the needs of a FiveM server. 
                  The goal was to develop game modifications for these servers. There isn't much more to say about it, but it significantly helped my understanding of lua scripting,
                  and improve on my coding skills.`,
      href: 'https://github.com/LordTiger/FiveM-Scripts'
    },
    {
      name: 'FiveM Server',
      photoName: 'originx.png',
      shortDesc: `As the lead developer, I ran a successful FiveM Server in South Africa, drawing in a lively community of hundreds of players. 
                  The project taught me invaluable lessons in hosting and configuration servers. Along the way,
                  I sharpened my skills in MySQL and Lua scripting, troubleshooting server performance issues, and debugging game code.`,
      href: 'https://www.youtube.com/@originxrp5202'
    },
    {
      name: 'E-Sports Scoring',
      photoName: 'scorecraft.png',
      shortDesc: `Using Angular v17 and .NET 8 Web API with entity framework, I developed this project for managing e-sports teams, with additional functionality of match scheduling, score tracking and win rate ratio's for the team managers.
                  The project goal was to learn standalone angular applications and how to integrate and use entity framework with .net web api.
                  The project was fun, implementing entity framework into .net was something new to me, and i enjoyed learning it.`,
      href: 'https://github.com/LordTiger/esports-scoring-app'
    }
  ];
  
}
