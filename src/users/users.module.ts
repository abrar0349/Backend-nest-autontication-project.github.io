import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userRepository } from './Entities/user.repository';

@Module({
  providers: [UsersService,userRepository],
  exports: [UsersService],
})
export class UsersModule {}
