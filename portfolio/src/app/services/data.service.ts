import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { portfolioData } from '../types/types';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  portfolioData: WritableSignal<portfolioData> = signal({});

  private httpClient = inject(HttpClient);
  private readonly fetchURL =  '/data.json';

  loadData() {
    return this.httpClient.get(this.fetchURL);
  }

}
