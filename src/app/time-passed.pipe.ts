import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): any {
    if(value){

      let today: Date = new Date(); //asin today
      let theDate: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());

      const seconds = Math.abs(Math.floor((theDate - value) / 1000)); //today minus the day posted

      if(seconds < 30){
        return 'Just now'
      } else {
           //periods in seconds
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };

      let counter;
      for(const i in intervals){ //each item in the intervals object
        //divide each by the difference in seconds and assign it to counter
        counter = Math.floor(seconds / intervals[i]);
        if(counter > 0){
          if(counter === 1){
            return `${counter} ${i} ago`;
          } else {
            return `${counter} ${i}s ago`;
          }
        }
      }
      }
    }

    // return value;
  }

}
