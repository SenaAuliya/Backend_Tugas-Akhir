import { IsNotEmpty, IsString } from "class-validator"

export class createDataInggris{

@IsString()
@IsNotEmpty()
title: string

@IsString()
@IsNotEmpty()
rumus: string

@IsString()
@IsNotEmpty()
contoh: string

}