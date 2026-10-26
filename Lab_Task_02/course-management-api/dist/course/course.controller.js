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
import { Controller, Get, Param, Post, Body, Delete, Patch, Put, UseInterceptors, UploadedFile, BadRequestException, } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
let CourseController = class CourseController {
    courseService;
    constructor(courseService) {
        this.courseService = courseService;
    }
    getAllCourses() {
        return this.courseService.getAllCourses();
    }
    getAllCoursesById(id) {
        return this.courseService.getCourseById(id);
    }
    createCourse(createCourseDto) {
        return this.courseService.createCourse(createCourseDto);
    }
    updateCourse(id, updateCourseDto) {
        return this.courseService.updateCourse(id, updateCourseDto);
    }
    patchCourse(id, updateCourseDto) {
        return this.courseService.patchCourse(id, updateCourseDto);
    }
    deleteCourse(id) {
        return this.courseService.deleteCourse(id);
    }
    uploadCourseMaterial(id, file) {
        if (!file) {
            throw new BadRequestException('File is required');
        }
        return this.courseService.uploadCourseMaterial(id, file);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getAllCourses", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getAllCoursesById", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "createCourse", null);
__decorate([
    Put(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "updateCourse", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "patchCourse", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "deleteCourse", null);
__decorate([
    Post(':id/upload'),
    UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueName = Date.now() + '-' + file.originalname;
                cb(null, uniqueName);
            },
        }),
        fileFilter: (req, file, cb) => {
            const allowed = /\.(jpg|jpeg|png|pdf)$/i;
            if (!file.originalname.match(allowed)) {
                return cb(new BadRequestException('Only .jpg, .jpeg, .png, .pdf files are allowed!'), false);
            }
            cb(null, true);
        },
        limits: { fileSize: 2 * 1024 * 1024 },
    })),
    __param(0, Param('id')),
    __param(1, UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "uploadCourseMaterial", null);
CourseController = __decorate([
    Controller('course'),
    __metadata("design:paramtypes", [CourseService])
], CourseController);
export { CourseController };
//# sourceMappingURL=course.controller.js.map