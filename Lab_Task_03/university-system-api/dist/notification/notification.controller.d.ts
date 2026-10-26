import { NotificationService } from './notification.service.js';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    send(body: {
        studentName: string;
        message: string;
    }): {
        message: string;
        student: string;
        notification: string;
    };
    check(body: {
        studentName: string;
        courseId: string;
    }): {
        message: string;
        data: never[];
    };
}
