import { Injectable, signal } from '@angular/core';
export type CurrentDevice = 'Desktop' | 'Mobile' 
@Injectable({
  providedIn: 'root'
})
export class DetectorService {

  device = signal<CurrentDevice>('Desktop');


  checkDevice() {
    var isMobile = this.isMobile();
    if(!isMobile) {
      this.device.set('Desktop');
      return;
    }

    this.device.set('Mobile');
  }

  private isMobile() {
    const minWidth = 768; // Minimum width for desktop devices
    return window.innerWidth < minWidth || screen.width < minWidth;
  }
}
