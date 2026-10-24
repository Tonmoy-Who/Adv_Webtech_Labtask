import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses() {
      return {
        message: 'All courses fetched', date: []
      };
  }

  getCourseById() {
         return {
           message: 'Course fetched', id
         };
  }

  createCourse() {
    return {
      message: 'Course created',
      data: { name: 'xyz', code: 'CS000' }, 
    };
  }
}
