import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { userEnity } from "./user.entity";

@Injectable()
export class userRepository extends Repository<userEnity>{
    constructor(private readonly dataSource: DataSource) {
        super(userEnity, dataSource.createEntityManager());

     
    }
    async finduserDetailByusername(username: string): Promise<userEnity> {
        return this.findOneBy({username});
    }
}