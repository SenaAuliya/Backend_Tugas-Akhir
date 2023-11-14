import { IsNotEmpty, IsString } from "class-validator"

export class createDataJawa{

    @IsString()
    @IsNotEmpty()
    indonesia:string

    @IsString()
    @IsNotEmpty()
    jawa:string
}