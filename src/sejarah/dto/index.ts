import { IsNotEmpty, IsString } from 'class-validator';

export class createDataSejarah {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
