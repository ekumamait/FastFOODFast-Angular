import { TestBed } from '@angular/core/testing';

import { ToasterService } from './toaster.service';
import { resetSpies, httpServiceSpy } from 'src/app/helpers/test/spies';
import { getSharedComponentImports } from '../../helpers/test/shared.imports';

describe('ToasterService', () => {
  beforeAll(() => resetSpies([httpServiceSpy]));

  beforeEach(() => TestBed.configureTestingModule({
    imports: [...getSharedComponentImports()],
  }));

  it('should be created', () => {
    const service: ToasterService = TestBed.get(ToasterService);
    expect(service).toBeTruthy();
  });
});
