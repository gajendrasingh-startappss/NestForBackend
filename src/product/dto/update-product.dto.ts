import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  product_name?: string;
  price?: number;
  discount?: number;
  delivery_charge?: number;
  tax?: number;
  distance?: number;
}
