import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { logoGithub, cloudDownloadOutline } from 'ionicons/icons';
import {MatTooltipModule} from '@angular/material/tooltip';

export type LinksT = {
  icon: string,
  href: string,
  name: string
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [IonIcon, CommonModule, MatIconModule, MatTooltipModule]
})
export class ProfileComponent  implements OnInit {
    @Input({required: true}) name!: string;
    @Input({required: true}) jobTitle!: string;
    @Input({required: true}) location!: string;
    @Input({required: true}) links!: Array<LinksT>;

    window = window;
    

    constructor() {
      addIcons({logoGithub, cloudDownloadOutline});
    }

  ngOnInit() {
    
  }

}
