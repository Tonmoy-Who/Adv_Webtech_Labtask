var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, Matches, IsOptional, Max, Min, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateCourseDto {
    name;
    code;
    instructor;
    credits;
    description;
}
__decorate([
    IsString(),
    IsNotEmpty({ message: 'Course name cannot be empty ' }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsNotEmpty({ message: 'Course code cannot be empty ' }),
    Matches(/^([A-Za-z]{2,3}[0-9]{3})$/, { message: ' Course code e.g. CS101 ' }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "code", void 0);
__decorate([
    IsString(),
    IsNotEmpty({ message: 'Instructor name cannot be empty ' }),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "instructor", void 0);
__decorate([
    IsNotEmpty({ message: 'Credits cannot be empty ' }),
    IsNumber({}, { message: 'Credits must be a number' }),
    Min(1, { message: 'Credits must be in between 1 and 6' }),
    Max(6, { message: 'Credits must be in between 1 and 6' }),
    Type(() => Number),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "credits", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "description", void 0);
//# sourceMappingURL=create-course.dto.js.map