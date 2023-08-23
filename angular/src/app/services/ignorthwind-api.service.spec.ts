import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IGNorthwindAPIService } from './ignorthwind-api.service';

describe('IGNorthwindAPIService', () => {
  let service: IGNorthwindAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IGNorthwindAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
