import { Test, TestingModule } from '@nestjs/testing';
import { HouseownerController } from './houseowner.controller';

describe('HouseownerController', () => {
  let controller: HouseownerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseownerController],
    }).compile();

    controller = module.get<HouseownerController>(HouseownerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
