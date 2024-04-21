import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';


export type ProjectT = {
  name: string;
  shortDesc: string;
  href?: string;
  photoName: string;
}
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonCardSubtitle, IonCardTitle, IonCardContent, IonCardHeader, IonCard ]
})
export class ProjectsComponent  implements OnInit {
  @Input({required: true}) projects!: Array<ProjectT>;
  window = window;

  constructor() { }

  ngOnInit() {}

}
