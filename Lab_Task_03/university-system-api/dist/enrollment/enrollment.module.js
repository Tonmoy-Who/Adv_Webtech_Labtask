var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module, forwardRef } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';
import { EnrollmentController } from './enrollment.controller.js';
import { CourseModule } from '../course/course.module.js';
import { NotificationModule } from '../notification/notification.module.js';
let EnrollmentModule = class EnrollmentModule {
};
EnrollmentModule = __decorate([
    Module({
        imports: [CourseModule, forwardRef(() => NotificationModule)],
        controllers: [EnrollmentController],
        providers: [EnrollmentService],
        exports: [EnrollmentService],
    })
], EnrollmentModule);
export { EnrollmentModule };
//# sourceMappingURL=enrollment.module.js.map