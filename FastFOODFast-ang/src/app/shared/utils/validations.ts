import { AbstractControl } from '@angular/forms';

export class Validations {

  public validInput(c: AbstractControl): { [key: string]: boolean } | null {
    const value = c.value;
    const re = /\S+@\S+\.\S+/;

    if (value !== '') {
      if (value.match(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')) || re.test(value)) {
        return null;
      }
      return { isValid: true };
    }
    return null;
  }
}