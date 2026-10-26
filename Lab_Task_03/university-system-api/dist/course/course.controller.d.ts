import { CourseService } from './course.service.js';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAll(): {
        message: string;
        data: never[];
    };
    getById(id: string): {
        message: string;
        id: string;
    };
    create(body: {
        name: string;
        code: string;
    }): {
        message: string;
        data: {
            name: string;
            code: string;
        };
    };
}
