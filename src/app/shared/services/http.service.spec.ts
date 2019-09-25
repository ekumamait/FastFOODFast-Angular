import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { resetSpies, httpServiceSpy } from 'src/app/helpers/test/spies';
import { getSharedComponentImports } from '../../helpers/test/shared.imports';

describe('HttpService', () => {
  beforeAll(() => resetSpies([httpServiceSpy]));

  beforeEach(() => TestBed.configureTestingModule({
    imports: [...getSharedComponentImports()],
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
