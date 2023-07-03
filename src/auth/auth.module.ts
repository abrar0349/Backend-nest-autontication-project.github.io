import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { userRepository } from 'src/users/Entities/user.repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthGuard } from 'src/guards/auth.guard';

@Module({
  imports: [ UsersModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '360s' },
    }),],
  controllers: [AuthController],
  providers: [AuthService,UsersService,userRepository,JwtService,AuthGuard],
})
export class AuthModule {}
