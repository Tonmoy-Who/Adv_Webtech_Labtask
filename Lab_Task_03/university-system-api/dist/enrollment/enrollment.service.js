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
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';
let EnrollmentService = class EnrollmentService {
    courseService;
    notificationService;
    constructor(courseService, notificationService) {
        this.courseService = courseService;
        this.notificationService = notificationService;
    }
    enrollStudent(studentName, courseId) {
        const course = this.courseService.getCourseById(courseId);
        const notification = this.notificationService.sendNotification(studentName, 'Enrollment confirmed');
        return {
            message: 'Student enrolled successfully',
            student: studentName,
            course,
        };
    }
    getEnrollments() {
        return { message: 'All enrollments fetched', data: [] };
    }
};
EnrollmentService = __decorate([
    Injectable(),
    __param(1, Inject(forwardRef(() => NotificationService))),
    __metadata("design:paramtypes", [CourseService, Object])
], EnrollmentService);
export { EnrollmentService };
//# sourceMappingURL=enrollment.service.js.map