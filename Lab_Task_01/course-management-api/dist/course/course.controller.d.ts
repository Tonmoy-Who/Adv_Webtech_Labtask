import { CourseService } from './course.service.js';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCoursed(): string;
    getAllCoursesById(id: string): string;
    createCourse(): string;
    updateCourse(id: string): string;
    patchCourse(id: string): string;
    deleteCourse(id: string): string;
}
