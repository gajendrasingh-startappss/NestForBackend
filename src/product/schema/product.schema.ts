import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productDocument = product & Document;
@Schema()
export class product {
  @Prop()
  product_name: string;

  @Prop()
  price: number;

  @Prop()
  discount: number;

  @Prop()
  delivery_charge: number;

  @Prop()
  tax: number;

  @Prop()
  date: string;

  @Prop()
  distance: number;

  @Prop()
  total_delivery_charge: number;
}

export const ProductSchema = SchemaFactory.createForClass(product);
