import { Component} from '@angular/core';
import { LinksT, ProfileComponent } from './components/profile/profile.component';
import { EducationAndWorkHistoryComponent } from './components/education-and-work-history/education-and-work-history.component';
import { ProjectsComponent, ProjectT } from './components/projects/projects.component';
import { AnimationComponent } from './components/animation/animation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent, EducationAndWorkHistoryComponent, ProjectsComponent, AnimationComponent],
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
  skills: Array<string> = ['Microsoft SQL', 'ASP.NET Web API', 'Angular', 'Firebase', 'JavaScript', 'TypeScript', "C#", 'Ionic', ".NET Core", "ASP.NET MVC", "Git"];

  // Give the shortDesc's more human feel, let the reader know what the challenges were and how librating it was to overcome. And that you don't fear a challenge.
  projects: Array<ProjectT> = [
    {
      name: 'FiveM Launcher',
      photoName: 'TDLauncher.png',
      shortDesc: `Angular and Electron combine to create a desktop app for FiveM. Seamlessly connect to multiple servers without in-game hassle.
       Enhance player convenience and efficiency with swift server access outside the game environment.`,
      href: 'https://github.com/LordTiger/td-fivem-launcher'
    },
    {
      name: 'Online Chatting App',
      photoName: 'vic_chat.jpg',
      shortDesc: `React and Firebase unite to enable real-time chatting. Google and Facebook login streamline connections.
       Engage effortlessly in a dynamic virtual environment, fostering seamless interaction with others.`,
      href: 'https://github.com/LordTiger/react-chatapp'
    },
    {
      name: 'Bundle of FiveM Scripts',
      photoName: 'fivem_lua_scripts.jpg',
      shortDesc: `Lua-script compilation tailored to diverse FiveM needs.
       Versatile solutions enhance gameplay and server management for various gaming scenarios, offering comprehensive support within the FiveM ecosystem.`,
      href: 'https://github.com/LordTiger/FiveM-Scripts'
    },
    {
      name: 'FiveM Server',
      photoName: 'originx.png',
      shortDesc: `Lua-driven server with MySQL integration, renowned in South Africa's FiveM RP community.
       Hosted up to 75 players continuously, delivering immersive multiplayer experiences and establishing a prominent presence in regional gaming.`,
      href: 'https://www.youtube.com/@originxrp5202'
    },
    {
      name: 'E-Sports Scoring',
      photoName: 'scorecraft.png',
      shortDesc: `Angular 17 and .NET 8 Web API converge to empower e-sports management. 
      Team managers benefit from streamlined player/team management, match scheduling, and comprehensive score tracking across diverse formats, elevating competitive gaming standards.`,
      href: 'https://github.com/LordTiger/esports-scoring-app'
    }
  ];
  
}
