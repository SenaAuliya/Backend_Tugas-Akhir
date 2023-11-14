import { IsNotEmpty, IsString } from 'class-validator';

export class createDataPuisi {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
