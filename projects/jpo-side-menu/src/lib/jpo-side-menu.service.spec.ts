import { TestBed } from '@angular/core/testing';

import { JpoSideMenuService } from './jpo-side-menu.service';

describe('JpoSideMenuService', () => {
  let service: JpoSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JpoSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
