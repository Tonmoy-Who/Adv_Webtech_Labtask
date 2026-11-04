import { IsString, IsNumber } from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  Id: string;

  @IsString()
  Name: string;

  @IsString()
  expertise: string;

  @IsNumber()
  noOfPublication: number;
}