import { Component, input } from '@angular/core';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { experience } from '../../types/types';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, MatDividerModule],
})
export class ExperienceComponent {
  experience = input<experience[]>();

  monthsYearsDifference(date1: string | Date, date2: string | Date): string {
    // Convert date strings to Date objects
    let d1 = new Date(date1);
    let d2 = (date2 !== '')? new Date(date2) : new Date();

    // Ensure d1 is earlier than d2
    if (d1 > d2) {
      [d1, d2] = [d2, d1];
    }

    // Calculate the difference in years and months
    let yearsDiff = d2.getFullYear() - d1.getFullYear();
    let monthsDiff = d2.getMonth() - d1.getMonth();

    // Adjust yearsDiff and monthsDiff if necessary
    if (monthsDiff < 0) {
      yearsDiff -= 1;
      monthsDiff += 12;
    }

    // Format the output
    let result = '';
    if (yearsDiff > 0) {
      result += `${yearsDiff} yr${yearsDiff > 1 ? 's' : ''}`;
    }

    if (monthsDiff > 0) {
      if (result) {
        result += ' ';
      }
      result += `${monthsDiff} mo${monthsDiff > 1 ? 's' : ''}`;
    }

    return result || '0 mos'; // Default case if no difference
  }
}
