import { Module } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CourseController } from './course.controller.js';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService], //new added for dependency injection in other modules
})
export class CourseModule {}
