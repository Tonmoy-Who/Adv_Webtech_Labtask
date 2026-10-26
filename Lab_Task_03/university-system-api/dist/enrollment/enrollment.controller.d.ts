import { EnrollmentService } from './enrollment.service.js';
export declare class EnrollmentController {
    private readonly enrollmentService;
    constructor(enrollmentService: EnrollmentService);
    getEnrollments(): {
        message: string;
        data: never[];
    };
    enroll(body: {
        studentName: string;
        courseId: string;
    }): {
        message: string;
        student: string;
        course: {
            message: string;
            id: string;
        };
    };
}
