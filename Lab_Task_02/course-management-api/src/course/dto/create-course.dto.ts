import { IsString, 
  Matches,
  IsOptional, 
  Max, 
  Min, 
  IsNotEmpty, 
  IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty({ message: 'Course name cannot be empty ' })
  name: string;

  @IsString() //CS101
   @IsNotEmpty({ message: 'Course code cannot be empty ' })
   //out of requirements
  @Matches(/^([A-Za-z]{2,3}[0-9]{3})$/,{ message: ' Course code e.g. CS101 ' })
  code: string;

  @IsString()
  @IsNotEmpty({ message: 'Instructor name cannot be empty ' })
  instructor: string;

  @IsNotEmpty({ message: 'Credits cannot be empty ' })
  @IsNumber({},{ message: 'Credits must be a number' }) // use first {} blank for number and the use 2nd brace for messaage
  @Min(1, { message: 'Credits must be in between 1 and 6' })
  @Max(6, { message: 'Credits must be in between 1 and 6' })
  @Type(() => Number)
  credits: number;

  @IsString()
  @IsOptional()
  description?: string;
}
