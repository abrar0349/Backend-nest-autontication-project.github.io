import { EntityBase } from "src/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
    
     @Entity()
export class userEnity extends EntityBase {
    @Column()
    username: string;

    @Column()
    password: string;
       userId: any;
}