import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses():object
    {
        return { message: "All courses fetched successfully", data: []};
    }
    getCourseById(id: string) 
    {
        return { message: "Course fetched successfully", data: `Get Course with ID: ${id} - from Service` };
    }

    createCourse() {
        return { message: "Course created successfully", data: `Create Course - from Service ` };
    }

    updateCourse(id: string){
        return { message: "Course updated successfully", data: `Update Course ${id} - from Service ` };
    }

    patchCourse(id: string) {
        return { message: "Course patched successfully", data: `Patch Course ${id} - from Service` };
    }

    deleteCourse(id: string) {
        return { message: "Course deleted successfully", data: `Delete Course ${id} - from Service ` };
    }
}
