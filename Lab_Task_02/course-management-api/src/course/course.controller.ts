import { 
  Controller, 
  Get, 
  Param,
   Post ,
   Body,
   Delete,
   Patch,
   Put,
} from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getAllCoursesById(@Param('id') id:string){
    return this.courseService.getCourseById(id);
  }

  @Post()
  createCourse(@Body() createCourseDto: CreateCourseDto){
    return this.courseService.createCourse(createCourseDto);
  } 

  @Put(':id') 
  updateCourse(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto){
        return this.courseService.updateCourse(id, updateCourseDto);
    }

    @Patch(':id')
    patchCourse(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        return this.courseService.patchCourse(id, updateCourseDto);
    }

     @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(id);
  }

  //File upload here
  
  

}
