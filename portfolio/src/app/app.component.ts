import { TuiRoot } from "@taiga-ui/core";
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationComponent } from "../../components/animation/animation.component";
import { HttpClient } from "@angular/common/http";
import { portfolioData } from "./types/types";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProfileComponent } from "./components/profile/profile.component";
import { SkillsAndExperienceComponent } from "./components/skills-and-experience/skills-and-experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, AnimationComponent, ProfileComponent,SkillsAndExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  portfolioData?: portfolioData;

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    const fetchURL = '/data.json';

    this.httpClient.get(fetchURL).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data: portfolioData) => {
      this.portfolioData = data;
    })
  }
}
