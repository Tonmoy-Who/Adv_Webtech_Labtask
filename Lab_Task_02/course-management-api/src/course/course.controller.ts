import { 
  Controller, 
  Get, 
  Param,
   Post ,
   Body,
   Delete,
   Patch,
   Put,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';//catch the file from the request and pass it to the controller method
import { diskStorage } from 'multer'; //to store the file in the disk storage

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.courseService.getCourseById(id);
  }

  @Post()
  createCourse(@Body() dto: CreateCourseDto) {
    return this.courseService.createCourse(dto);
  }

  @Put(':id')
  updateCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.courseService.updateCourse(id, dto);
  } 


    @Patch(':id')
  patchCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.courseService.patchCourse(id, dto);
  }

     @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(id);
  }

  //File upload here
  @Post(':id/upload')
  @UseInterceptors(
    FileInterceptor('file', {
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
          return cb(
            new BadRequestException('Only .jpg, .jpeg, .png, .pdf files are allowed!'),
            false,
          );
        }
        cb(null, true);
      },
      limits: { fileSize: 2 * 1024 * 1024 }, 
    }),
  )
  uploadCourseMaterial(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    return this.courseService.uploadCourseMaterial(id, file);
  }
  

}
