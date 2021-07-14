import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class CustomePipe implements PipeTransform {
  transform(value: string): any {
    const maxLength = 15;
    let res = value;
    if(value.length > maxLength) {
        res = value.substr(0,8) + "..." + value.substr(value.length-7,value.length);
    }
    return res;
  }
}