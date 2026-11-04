import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entities/products.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductsService {
    constructor( 
        @InjectRepository(Products) 
        private productsRepo: Repository<Products>, 
    ) {}

    async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto);
    await this.productsRepo.save(product);
    
    return { message: 'Product created', data: product }; 
  }
}
