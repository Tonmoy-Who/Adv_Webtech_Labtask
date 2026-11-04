import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post('create-faculty')
  create(@Body(ValidationPipe) createFacultyDto: CreateFacultyDto) {
    return this.facultiesService.create(createFacultyDto);
  }
}