import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be not null', async () => {
    const insertRes = await controller.create({
      lastName: 'joey',
      firstName: 'joey',
      isActive: true,
    });
    console.log('insertRes', insertRes);
    expect(insertRes).not.toBeNull();
  });
});
