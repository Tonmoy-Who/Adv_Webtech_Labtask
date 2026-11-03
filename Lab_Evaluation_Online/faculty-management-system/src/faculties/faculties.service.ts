import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './Entities/faculty.entity.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private facultyRepository: Repository<Faculty>,
  ) {}

 async create(createFacultyDto: CreateFacultyDto) {
  try {
    const newFaculty = this.facultyRepository.create(createFacultyDto);
    return await this.facultyRepository.save(newFaculty); 
  } catch (error) {
    console.error("Error saving faculty:", error);
    throw new Error("Failed to create faculty"); 
  }
}
}