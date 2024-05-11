import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';

export type Skill_ExpT = {
  category: 'Backend Development' | 'Frontend Development' | 'Database and Deployment';
  technologies: Array<string>;
}

@Component({
  selector: 'skills-and-experience',
  templateUrl: './skills-and-experience.component.html',
  styleUrls: ['./skills-and-experience.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, MatCardModule]
})
export class SkillsAndExperienceComponent  implements OnInit {
  @Input({required: true}) skills_exp!: Array<Skill_ExpT>;
  @Input({required: true}) description!: string;
  constructor() { }

  ngOnInit() {}

}
