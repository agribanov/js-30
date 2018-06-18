import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipe implements PipeTransform {

  transform(value: any, addWorld: boolean = true): any {
    return Array.isArray(value)
            ? this.transformArray(value, addWorld)
            : this.tranformString(value, addWorld);
  }

  transformArray(value: string[], addWorld: boolean): string[]{
    return value.map((str: string) => this.tranformString(str, addWorld));
  }

  tranformString(value: string, addWorld?: boolean): string{
    return `Hello${addWorld ? ' world' : ''}, ${value}!`;
  }

}
