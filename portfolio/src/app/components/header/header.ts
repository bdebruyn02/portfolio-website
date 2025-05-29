import { CommonModule, NgOptimizedImage  } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  fullName = input<string>();
  title = input<string>();
  location = input<string>();
  description = input<string>();
  imgUrl = input<string>();

}
