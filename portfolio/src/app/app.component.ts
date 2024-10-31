import { AfterViewInit, Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationComponent } from './components/animation/animation.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from './services/data.service';
import { portfolioData } from './types/types';
import { ProfileComponent } from './components/profile/profile.component';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimationComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  private dataService = inject(DataService);
  private destroyRef = inject(DestroyRef);

  portfolioData?: portfolioData;

  ngAfterViewInit(): void {
    if(!this.portfolioData) {
      this.fetchData();
    }
  }

  private async fetchData() {
    try {
      const data = await this.dataService.loadData();

      if(data) {
        this.portfolioData = data;
        this.dataService.portfolioData.set(data);
      }
    } catch (error) {
      console.error(error)
    }
  }
}
