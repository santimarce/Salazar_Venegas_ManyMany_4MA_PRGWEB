/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsOptional } from "class-validator";


export class PaginacionDto{
    @IsOptional()
    @Type( ()=> Number)
    limit?: number

    @IsOptional()
    @Type( ()=> Number)
    offset?: number
}