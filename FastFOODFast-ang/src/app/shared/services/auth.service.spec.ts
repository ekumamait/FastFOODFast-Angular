import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { resetSpies, httpServiceSpy } from 'src/app/helpers/test/spies';
import { getSharedComponentImports } from '../../helpers/test/shared.imports';
import { of } from 'rxjs';

describe('AuthService', () => {
  beforeAll(() => resetSpies([httpServiceSpy]));

  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [...getSharedComponentImports()],
  })
    service = TestBed.get(AuthService);
});

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('sendRequest', () => {
    httpServiceSpy.makeRequestWithData.sendRequest;
    expect().nothing();
  });

  it('sendRegData', () => {
    httpServiceSpy.makeRequestWithData.sendRegData;
    expect().nothing();
  });
  
});
