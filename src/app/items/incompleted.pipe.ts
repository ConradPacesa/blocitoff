import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incompleted',
  pure: false
})

export class IncompletedPipe implements PipeTransform {
  transform(items: any[], filter: Object): any {
    return items.filter(item => item.completed === false);
  }
}
