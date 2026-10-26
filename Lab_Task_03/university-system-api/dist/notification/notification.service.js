var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';
let NotificationService = class NotificationService {
    enrollmentService;
    constructor(enrollmentService) {
        this.enrollmentService = enrollmentService;
    }
    sendNotification(studentName, message) {
        return {
            message: 'Notification sent',
            student: studentName,
            notification: message,
        };
    }
    checkEnrollmentAndNotify(studentName, courseId) {
        return this.enrollmentService.getEnrollments();
    }
};
NotificationService = __decorate([
    Injectable(),
    __param(0, Inject(forwardRef(() => EnrollmentService))),
    __metadata("design:paramtypes", [Object])
], NotificationService);
export { NotificationService };
//# sourceMappingURL=notification.service.js.map