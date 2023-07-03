import { Injectable } from '@nestjs/common';
import { userRepository } from './Entities/user.repository';
import { userEnity } from './Entities/user.entity';

export type User = any;

@Injectable()
export class UsersService {

  constructor(private readonly userrepositoy: userRepository){}
    // private readonly users = [
    //     {
    //       userId: 1,
    //       username: "Muddasir",
    //       password: "1234",
    //     },
    //     {
    //       userId: 2,
    //       username: 'Abrar khan',
    //       password: 'khan is khan',
    //     },
    //   ];
    

  async findOne(username: string): Promise<userEnity> {
    return this.userrepositoy.finduserDetailByusername(username);
}
}
