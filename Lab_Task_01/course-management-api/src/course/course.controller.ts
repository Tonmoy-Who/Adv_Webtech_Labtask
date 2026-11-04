import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Put,
} from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
<<<<<<< HEAD
  @Get()
  getAllCoursed() {
    return this.courseService.getAllCourses();
  }

  @Post(':id')
  getAllCoursesById(@Param('id') id: string) {
    return this.courseService.getCourseById(id);
  }

  @Put()
=======

  @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.courseService.getCourseById(id);
  }

  @Post()
>>>>>>> Labtask-1
  createCourse() {
    return this.courseService.createCourse();
  }

  @Put(':id')
  updateCourse(@Param('id') id: string) {
    return this.courseService.updateCourse(id);
  }

  @Patch(':id')
  patchCourse(@Param('id') id: string) {
    return this.courseService.patchCourse(id);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(id);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> Labtask-1
