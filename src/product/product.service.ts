import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { product, productDocument } from './schema/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(product.name)
    private productModel: Model<productDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<productDocument> {
    try {
      const model = new this.productModel({
        product_name: createProductDto.product_name,
        price: createProductDto.price,
        discount: createProductDto.discount,
        delivery_charge: createProductDto.delivery_charge,
        tax: createProductDto.tax,
        distance: createProductDto.distance,
        date: new Date().toDateString(),
      });
      const savedProduct = await model.save();
      return savedProduct;
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<product[]> {
    try {
      return this.productModel.find().exec();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.productModel.findById(id);
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      return await this.productModel.findByIdAndUpdate(
        id,
        { $set: updateProductDto },
        { new: true },
      );
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      return await this.productModel.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }
}
