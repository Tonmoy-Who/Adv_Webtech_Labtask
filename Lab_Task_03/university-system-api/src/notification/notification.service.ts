import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

// Define an interface to represent the methods of EnrollmentService that NotificationService will use
//circular dependency is resolved by using forwardRef and interface to avoid direct dependency on EnrollmentService
interface EnrollmentLookup {
  getEnrollments(): ReturnType<EnrollmentService['getEnrollments']>;
}

@Injectable()
export class NotificationService {
    constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: EnrollmentLookup,
    ) {}

    sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent',
      student: studentName,
      notification: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    return this.enrollmentService.getEnrollments();
  }

}
