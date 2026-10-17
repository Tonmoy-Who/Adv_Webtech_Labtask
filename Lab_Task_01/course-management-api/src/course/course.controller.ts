import { Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  getAllCoursed(){
    return this.courseService.getAllCourses();
  }

  @Post(':id')
  getAllCoursesById(@Param('id') id:string){
    return this.courseService.getCourseById(id);
  }
}
