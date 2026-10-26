import { CourseService } from '../course/course.service.js';
interface NotificationSender {
    sendNotification(studentName: string, message: string): {
        message: string;
        student: string;
        notification: string;
    };
}
export declare class EnrollmentService {
    private courseService;
    private notificationService;
    constructor(courseService: CourseService, notificationService: NotificationSender);
    enrollStudent(studentName: string, courseId: string): {
        message: string;
        student: string;
        course: {
            message: string;
            id: string;
        };
    };
    getEnrollments(): {
        message: string;
        data: never[];
    };
}
export {};
