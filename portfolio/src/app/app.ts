import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Skills } from './components/skills/skills';
import { WorkHistory } from './components/work-history/work-history';
import FeaturedProjects from './components/featured-projects/featured-projects';

@Component({
  selector: 'app-root',
  imports: [Header, Skills, WorkHistory, FeaturedProjects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}
