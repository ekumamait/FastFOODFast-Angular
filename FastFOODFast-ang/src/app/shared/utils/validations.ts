import { AbstractControl } from '@angular/forms';

export class Validations {

  public validInput(c: AbstractControl): { [key: string]: boolean } | null {
    const value = c.value;
    const re = /\S+@\S+\.\S+/;

    if (value !== '') {
      if (value.match(new RegExp(/^[+][2][5][0-9]{10}$/)) || re.test(value)) {
        return null;
      }
      return { isValid: true };
    }
    return null;
  }
}