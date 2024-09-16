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

  monthsYearsDifference(_startDate: string | Date, _endDate: string | Date): string {
    // Convert date strings to Date objects
    let startDate = new Date(_startDate);
    let endDate = (_endDate !== '')? new Date(_endDate) : new Date();

    // Ensure startDate is earlier than endDate
    if (startDate > endDate) {
      [startDate, endDate] = [endDate, startDate];
    }

    // Calculate the difference in years and months
    let yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    let monthsDiff = endDate.getMonth() - startDate.getMonth();
  

    // Adjust yearsDiff and monthsDiff if necessary
    if (monthsDiff < 0) {
      yearsDiff -= 1;
      monthsDiff += 12;
    }

    if((startDate.getMonth() === endDate.getMonth()) 
      && startDate.getFullYear() === endDate.getFullYear()) {
      monthsDiff = 1;
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
