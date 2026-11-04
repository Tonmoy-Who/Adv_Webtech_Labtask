import { Injectable,NotFoundException,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,ILike } from 'typeorm';
import { Products } from './entities/products.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';

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
    // findAndCount use kore ekbare data and total count niye asha
    //i also can use find() and count() separately but findAndCount is more efficient
    //if i want t o use find method then i have to use count:data.length
    const [products, count] = await this.productsRepo.findAndCount({ 
        order: { createdAt: 'DESC' } 
    });

    return {
        message: 'All products fetched',
        count: count,
        data: products, 
    };
}

  async findOne(id: number) {
  const product = await this.productsRepo.findOne({ where: { id } });//id diye product search kora hocche
  if (!product) {
    throw new NotFoundException(`Product with id ${id} not found`);//product nah thakle exception
  }
  return {
    message: 'Product fetched successfully',
    data: product,
  };
}

  // PATCH request er jonno
async update(id: number, dto: PartialUpdateProductDto) {
  //preload method use kore product ta load kora hocche
  //...dto diye product er notun value gulo update kora hocche
    const product = await this.productsRepo.preload({ id, ...dto });

    if (!product) {
        throw new NotFoundException(`Product with ID ${id} not found`);
    }
    const updatedProduct = await this.productsRepo.save(product);
    return {
        message: 'Product updated successfully',
        data: updatedProduct,
    };
}
  //update data replace korar jonno use kora hocche
  // jekhane user sob field update korbe (put request er jonno)
  async replace(id: number, dto: UpdateProductDto) {
  const product = await this.productsRepo.findOne({ where: { id } });

  if (!product) {
    throw new NotFoundException(`Product with id ${id} not found`);
  }

  const replacedProduct = this.productsRepo.create({
    id,        
    ...dto,      // spread operator use korlam baki sob field user jei data pathabe, oita boshanor jonno
  });
  const savedProduct = await this.productsRepo.save(replacedProduct);
  return {
    message: 'Product replaced successfully',
    data: savedProduct,
  };
}

  async remove(id: number) {
  //Check data database e ache kina
  const product = await this.productsRepo.findOne({ where: { id } });
  
  if (!product) {
    throw new NotFoundException(`Product with id ${id} not found`);
  }
  
  //Delete 
  const result = await this.productsRepo.delete(id);
  
  // Jodi delete na hoy (affected 0 hoy), tahole Bad Request Exception throw kora hocche
  //affected typeorm er delete method return kore(mane koto gula row delete hoyeche)
  if (result.affected === 0) { 
    throw new BadRequestException(`Product with id ${id} could not be deleted`);
  }
  return { message: 'Product deleted successfully', id: id };
}


  async findByCategory(category: string) {
  const [data, count] = await this.productsRepo.findAndCount({
    where: { category },
  });
  if (count === 0) {
    return {
      message: `No products found in category '${category}'`,
      count: 0,
      data: [],//for handling empty data case, return empty array instead of null or undefined
    };
  }
  return {
    message: `Products in category '${category}' fetched successfully`,
    count: count,
    data: data,
  };
}

  async search(keyword: string) {
  const [data, count] = await this.productsRepo.findAndCount({
    where: { name: ILike(`%${keyword}%`) }, // ILike used for case-insensitive search
  });

  if (count === 0) {
    return {
      message: `No products found matching keyword '${keyword}'`,
      count: 0,
      data: [],
    };
  }

  return {
    message: `Search results for '${keyword}' fetched successfully`,
    count: count,
    data: data,
  };
}

  async toggleActive(id: number) {
  const product = await this.productsRepo.findOne({ where: { id } });

  if (!product) {
    throw new NotFoundException(`Product with id ${id} not found`);
  }
  product.isActive = !product.isActive;
  const updatedProduct = await this.productsRepo.save(product);
  return {
    message: `Product status toggled to ${updatedProduct.isActive ? 'Active' : 'Inactive'}`,
    data: updatedProduct,
  };
}
}
