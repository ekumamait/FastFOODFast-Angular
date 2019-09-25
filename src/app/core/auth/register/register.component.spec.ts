import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ToasterService } from '../../../shared/services/toaster.service';
import { getSharedComponentImports } from '../../../helpers/test/shared.imports';
import { AuthService } from '../../../shared/services/auth.service';
import { AuthServiceSpy, toasterServiceSpy } from 'src/app/helpers/test/spies';
import { resetSpies, httpServiceSpy } from 'src/app/helpers/test/spies';
import { HttpService } from 'src/app/shared/services/http.service';

describe('RegisterComponent', () => {
  beforeAll(() => resetSpies([httpServiceSpy]));
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...getSharedComponentImports()],
      declarations: [ RegisterComponent ],
      providers: [
        { provide: AuthService, useValue: AuthServiceSpy },
        { provide: ToasterService, useValue: toasterServiceSpy },
        { provide: HttpService, useValue: httpServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form should be invalid with user_name less than 4 characters', () => {
    component.registrationForm.setValue({
      user_name: 'Arn',
      user_email: 'arnold@mail.com',
      user_password: 'strongpass'
    });
    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.registrationForm.setValue({
      user_name: 'ArnoldX',
      user_email: 'arnold@mail.com',
      user_password: 'strongpass',
    });
    expect(component.registrationForm.valid).toBeTruthy();
  });

  it('should call the onSubmit method', () => {
    spyOn(component, 'submit');
    el = fixture.nativeElement.querySelector('#submission');
    el.dispatchEvent(new Event('click'));
    component.submit();
    expect().nothing();
  });
});
