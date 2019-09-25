import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const queryByCss = (fixture: ComponentFixture<any>, className: string) => {
  return fixture.debugElement.query(By.css(className));
};

export const queryAllByCss = (fixture: ComponentFixture<any>, className: string) => {
  return fixture.debugElement.queryAll(By.css(className));
};
