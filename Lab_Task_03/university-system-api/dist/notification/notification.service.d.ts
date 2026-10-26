import { EnrollmentService } from '../enrollment/enrollment.service.js';
interface EnrollmentLookup {
    getEnrollments(): ReturnType<EnrollmentService['getEnrollments']>;
}
export declare class NotificationService {
    private enrollmentService;
    constructor(enrollmentService: EnrollmentLookup);
    sendNotification(studentName: string, message: string): {
        message: string;
        student: string;
        notification: string;
    };
    checkEnrollmentAndNotify(studentName: string, courseId: string): {
        message: string;
        data: never[];
    };
}
export {};
