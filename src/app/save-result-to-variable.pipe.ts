import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saveResultToVariable'
})
export class SaveResultToVariablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
