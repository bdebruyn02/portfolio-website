import { Component, input, OnInit } from '@angular/core';
import { skillExpT } from '../../types/types';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';
import { MatCardModule } from '@angular/material/card';

type highlightedCategory = {
  category?: string;
  color?: string;
};

@Component({
  standalone: true,
  selector: 'skills-and-experience',
  templateUrl: './skills-and-experience.component.html',
  styleUrls: ['./skills-and-experience.component.scss'],
  imports: [CommonModule, IonCard, IonCardContent, MatCardModule]
})
export class SkillsAndExperienceComponent  implements OnInit {

  skills_exp = input<skillExpT[]>();
  description = input<string>();

  selectedCategory: highlightedCategory = {};

  ngOnInit() {}

}
