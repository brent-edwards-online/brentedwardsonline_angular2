import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'techFilter'
})
export class TechFilterPipe implements PipeTransform {

  transform(items: any[], args: string): any {
      if( items != undefined)
      {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.title.toLowerCase().indexOf(args.toLowerCase()) !== -1 || item.description.toLowerCase().indexOf(args.toLowerCase()) !== -1);
      }
      else{
        return items;
      }
    }
}