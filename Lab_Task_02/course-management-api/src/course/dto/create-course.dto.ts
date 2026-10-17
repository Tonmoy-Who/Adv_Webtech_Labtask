import { IsString, Matches, IsEmpty, IsOptional, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  @IsEmpty()
  name: string;

  @IsString() //CS101
  @Matches(/^([A-Za-z]{2,3}[0-9]{3})$/)
  code: string;

  @IsString()
  @IsEmpty()
  instructor: string;

  @IsEmpty()
  @Min(1)
  @Max(6)
  @Type(() => Number)
  credits: number;

  @IsString()
  @IsOptional()
  description?: string;
}
