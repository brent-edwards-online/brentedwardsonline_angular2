import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'workFilter'
})
export class WorkFilterPipe implements PipeTransform {

  transform(items: any[], args: string): any {
      if( items != undefined)
      {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.companyName.toLowerCase().indexOf(args.toLowerCase()) !== -1);
      }
      else{
        return items;
      }
    }
}