import { Test, TestingModule } from '@nestjs/testing';
import { HouseownerService } from './houseowner.service';

describe('HouseownerService', () => {
  let service: HouseownerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseownerService],
    }).compile();

    service = module.get<HouseownerService>(HouseownerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
