import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(items: any,item:string): any {
    console.log(items)
    console.log(item)
    if (item) {
      return items.filter(elm => elm.title.toLowerCase().indexOf(item.toLowerCase()) >=0);
    } else {
      return items;
    }
    
  }

}
