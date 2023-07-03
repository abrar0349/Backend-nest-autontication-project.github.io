import { IsNotEmpty, IsString } from "class-validator";

export class SingnInDto{
    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsNotEmpty()
    @IsString()
    Password: string;
}
