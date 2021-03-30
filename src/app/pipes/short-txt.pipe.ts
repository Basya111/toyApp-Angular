import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTxt'
})
export class ShortTxtPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    if(value.length > 90){
      let shortTxt = value.substring(0, 90) + '...'
      return shortTxt;
    }
    else return value

  }

}
