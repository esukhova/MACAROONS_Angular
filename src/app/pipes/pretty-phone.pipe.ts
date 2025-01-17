import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyPhone'
})
export class PrettyPhonePipe implements PipeTransform {

  transform(phone: string): string {
    return '+' + phone.slice(0, 3) + ' (' + phone.slice(3, 5) + ') ' + phone.slice(5, 8) + '-' + phone.slice(8, 10)+ '-' + phone.slice(10, 12);
  }

}
