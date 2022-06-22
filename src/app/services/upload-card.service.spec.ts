import { TestBed } from '@angular/core/testing';

import { UploadCardService } from './upload-card.service';

describe('UploadCardService', () => {
  let service: UploadCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
