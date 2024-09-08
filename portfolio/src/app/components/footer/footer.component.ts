import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [ MatDividerModule, ChipModule]
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  goToLink(href: string, extra: string) {
    window.open(href, extra);
  }

}
