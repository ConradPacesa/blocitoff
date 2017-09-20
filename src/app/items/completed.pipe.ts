import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completed',
  pure: false
})

export class CompletedPipe implements PipeTransform {
  transform(items: any[], filter: Object): any {
    return items.filter(item => item.completed === true);
  }
}
