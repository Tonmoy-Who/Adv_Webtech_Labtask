import { Controller,Post,
  Body,Get,Query,Param,ParseIntPipe,
  Delete,Patch,Put } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}


  //ekhaen async aawait use kora jay
  // @Post()
  // async create(@Body()  dto:CreateProductDto){
  //   return await this.productsService.create(dto)
  // }
  @Post()
create(@Body() dto: CreateProductDto) {
  return this.productsService.create(dto);
}

@Get('search')
search(@Query('keyword') keyword: string) {
  return this.productsService.search(keyword);
}

@Get('category/:cat')
findByCategory(@Param('cat') cat: string) {
  return this.productsService.findByCategory(cat);
}

@Get()
findAll() {
  return this.productsService.findAll();
}

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  return this.productsService.findOne(id);
}

@Patch(':id')
update(
  @Param('id', ParseIntPipe) id: number,
  @Body() dto: PartialUpdateProductDto,
) {
  return this.productsService.update(id, dto);
}

@Put(':id')
replace(
  @Param('id', ParseIntPipe) id: number,
  @Body() dto: UpdateProductDto,
) {
  return this.productsService.replace(id, dto);
}

@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number) {
  return this.productsService.remove(id);
}

@Patch(':id/toggle')
toggleActive(@Param('id', ParseIntPipe) id: number) {
  return this.productsService.toggleActive(id);
}

}
