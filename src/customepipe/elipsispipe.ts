import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringEllipsis'
})
export class StringEllipsisPipe implements PipeTransform {
  transform(value: string): any {
    let res = value.substring(0, value.length-7);
    return res;
  }
}