import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationComponent } from './components/animation/animation.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from './services/data.service';
import { portfolioData } from './types/types';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimationComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private dataService = inject(DataService);
  private destroyRef = inject(DestroyRef);

  portfolioData?: portfolioData;

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.dataService.loadData().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data: portfolioData) => {
      this.portfolioData = data;
      this.dataService.portfolioData.update(x => x = data);
    });
  }
}
