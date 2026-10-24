import { Controller,Get,Param,Body,Post } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAll() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getById(@Param() params: any) {
    return this.courseService.getCourseById(params.id);
  }

  @Post()
  create(@Body() body: { name: string; code: string }) {
    return this.courseService.createCourse(body.name, body.code);
  }

}
