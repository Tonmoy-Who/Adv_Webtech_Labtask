import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): object;
    getAllCoursesById(id: string): {
        message: string;
        id: string;
    };
    createCourse(createCourseDto: CreateCourseDto): {
        message: string;
        data: CreateCourseDto;
    };
    updateCourse(id: string, updateCourseDto: UpdateCourseDto): {
        message: string;
        id: string;
        data: UpdateCourseDto;
    };
    patchCourse(id: string, updateCourseDto: UpdateCourseDto): {
        message: string;
        id: string;
        updatedFields: string[];
    };
    deleteCourse(id: string): {
        message: string;
        id: string;
    };
    uploadCourseMaterial(id: string, file: Express.Multer.File): {
        message: string;
        courseId: string;
        filename: string;
        path: string;
    };
}
