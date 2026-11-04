import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entities/products.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';
import { Like } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor( 
        @InjectRepository(Products) 
        private productsRepo: Repository<Products>, 
    ) {}

    async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto); // Create a new product entity from the DTO
    const savedProduct = await this.productsRepo.save(product); // Save the product to the database
    
    return { message: 'Product created', data: savedProduct };
  }

  async findAll() {
    const data = await this.productsRepo.find(); 
    
    return { message: 'All products fetched', data }; 
  }

  async findOne(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    
    return { message: 'Product fetched', data: product }; 
  }

  async update(id: number, dto: PartialUpdateProductDto) {
    await this.productsRepo.update(id, dto);  
    const updated = await this.productsRepo.findOne({ where: { id } });
    
    return { message: 'Product updated', data: updated };
  }

  async replace(id: number, dto: UpdateProductDto) {
    await this.productsRepo.update(id, dto);
    const updated = await this.productsRepo.findOne({ where: { id } });
    
    return { message: 'Product replaced', data: updated };
  }

  async remove(id: number) {
    await this.productsRepo.delete(id);
    
    return { message: 'Product deleted', id };
  }

  async findByCategory(category: string) {
    const data = await this.productsRepo.find({ where: { category } });
    
    return { message: `Products in ${category}`, count: data.length, data };
  }

  async search(keyword: string) {
    const data = await this.productsRepo.find({
      where: { name: Like(`%${keyword}%`) }, 
    });
    
    return { message: `Search results`, count: data.length, data };
  }

  async toggleActive(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    if (product) {
      product.isActive = !product.isActive;
      await this.productsRepo.save(product);
    }
    
    return { message: 'Toggled', data: product }; 
  }
}
