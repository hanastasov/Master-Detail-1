import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindExtendedService } from './northwind-extended.service';

describe('NorthwindExtendedService', () => {
  let service: NorthwindExtendedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindExtendedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
