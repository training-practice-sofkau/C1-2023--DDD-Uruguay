import { Test, TestingModule } from '@nestjs/testing';
import { CuponService } from './cupon.service';

describe('CuponService', () => {
  let service: CuponService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuponService],
    }).compile();

    service = module.get<CuponService>(CuponService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
