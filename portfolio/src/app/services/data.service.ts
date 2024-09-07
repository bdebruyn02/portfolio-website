import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { fileOptionsT, portfolioData } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { downloadAUrl } from 'better-file-downloader';

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

  async download(path: string, args: fileOptionsT) {
    await downloadAUrl(path, {
      fileName: args.filename,
      extension: args.extension,
      contentType: args.contentType
    });
  }

}
