import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';

// Define an interface to represent the methods of NotificationService that EnrollmentService will use
//circular dependency is resolved by using forwardRef and interface to avoid direct dependency on NotificationService
interface NotificationSender {
  sendNotification(
    studentName: string,
    message: string,
  ): {
    message: string;
    student: string;
    notification: string;
  };
}

@Injectable()
export class EnrollmentService {
     constructor(
      private courseService: CourseService,
    @Inject(forwardRef(() => NotificationService))
    private notificationService: NotificationSender,
    ) {}

    enrollStudent(studentName: string, courseId: string) {
        // Fetch the course details using the CourseService
        //Dependency injection is used to access the CourseService methods
    const course = this.courseService.getCourseById(courseId);
    const notification = this.notificationService.sendNotification(
    studentName,
      'Enrollment confirmed',
    );
    return {
      message: 'Student enrolled successfully',
      student: studentName,
      course,
    };
  }

  getEnrollments() {
    return { message: 'All enrollments fetched', data: [] };
  }
}
