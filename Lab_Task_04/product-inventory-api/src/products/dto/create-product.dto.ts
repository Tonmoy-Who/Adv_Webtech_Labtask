import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
  IsInt,
  Min,
  IsBoolean,
} from 'class-validator';
import { Type} from 'class-transformer';

export class CreateProductDto {
  @IsString({ message: 'Name must be a string'})
  @IsNotEmpty({ message: 'Name should not be empty'})
  name: string;

  @IsString({ message: 'Description must be a string'})
  @IsOptional()
  description?: string;

  @IsNumber({}, { message: 'Price must be a number' })
  @IsPositive({ message: 'Please enter a positive number' })
  @Type(() => Number)
  price: number;

  @IsInt({ message: 'Stock must be a whole number(integer)!' })
  @Min(0, { message: 'Stock cannot be less than 0!' })
  @IsOptional()
  @Type(() => Number)
  stock?: number;

  @IsString({ message: 'Category must be a string!' })
  @IsNotEmpty({ message: 'Category cannot be empty!' })
  category: string;

  @IsBoolean({ message: 'Active status must be either true or false!' })
  @IsOptional()
  isActive?: boolean;
}