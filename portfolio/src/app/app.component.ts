import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationComponent } from './components/animation/animation.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from './services/data.service';
import { portfolioData } from './types/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private dataService = inject(DataService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.dataService.loadData().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data: portfolioData) => {
      this.dataService.portfolioData.set(data);
    });
  }
}
