import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductModule } from './product.module';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post('/set')
  async create(
    @Req() req: any,
    @Res() res: any,
    @Body() CreateProductDto: CreateProductDto,
  ) {
    try {
      const SaveData = await this.productService.create(CreateProductDto);
      const Send = res.json({
        data: SaveData,
      });
    } catch (error) {
      return res.json({
        error: error,
        message: 'somethig Went Worng...!',
      });
    }
  }

  @Get('/get')
  async findAll(@Req() req: any, @Res() res: any) {
    try {
      const getdata = await this.productService.findAll();
      getdata.forEach((curr) => {
        curr['total_delivery_charge'] =
          curr['distance'] * curr['delivery_charge'];
      });
      console.log('Total Delivery Charge: ', getdata);
      const getdatasend = res.json({
        data: getdata,
      });
    } catch (error) {
      return res.json({
        error: error,
        message: 'somethig Went Worng...!',
      });
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
