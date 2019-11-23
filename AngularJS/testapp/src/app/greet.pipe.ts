import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let finalVal='';
    finalVal= "hello "+value+".Have a nice day!"
    return finalVal;
  }

}
