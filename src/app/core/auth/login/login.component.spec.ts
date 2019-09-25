import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {
  AuthServiceSpy,
  // resetSpies,
  toasterServiceSpy,
} from '../../../helpers/test/spies';
import { ToasterService } from '../../../shared/services/toaster.service';
import { getSharedComponentImports } from '../../../helpers/test/shared.imports';
import { AuthService } from '../../../shared/services/auth.service';
import { resetSpies, httpServiceSpy } from 'src/app/helpers/test/spies';
import { HttpService } from '../../../shared/services/http.service';



describe('LoginComponent', () => {

  beforeAll(() => resetSpies([httpServiceSpy, toasterServiceSpy]));
  
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...getSharedComponentImports()],
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: AuthServiceSpy },
        { provide: ToasterService, useValue: toasterServiceSpy },
        { provide: HttpService, useValue: httpServiceSpy }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form should be invalid', () => {
    component.loginForm.setValue({
      Username: '',
      Password: ''
    });
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.loginForm.setValue({
      Username: 'James',
      Password: '1234',
    });
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should call the onSubmit method', () => {
    spyOn(component, 'submit');
    el = fixture.nativeElement.querySelector('#submission');
    el.dispatchEvent(new Event('click'));
    component.submit();
    expect().nothing();
  });
});
