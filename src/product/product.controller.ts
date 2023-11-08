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
      let getdata = await this.productService.findAll();
      const filteredData = getdata.map((currelm, ind) => {
        let total_delivery_charge: any;
        return (total_delivery_charge =
          currelm.delivery_charge * currelm.distance);
      });
      getdata.forEach((ele, ind) => {
        ele.total_delivery_charge = filteredData[ind];
      });
      // console.log(getdata);
      res.json({
        data: getdata,
        // charge: filteredData,
        message: 'get successfully..!',
      });
    } catch (error) {
      return res.json({
        error: error,
        message: 'somethig Went Worng...!',
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: any) {
    try {
      const findone = await this.productService.findOne(id);
      res.json({
        data: findone,
        message: 'get successfully..!',
      });
    } catch (error) {
      return res.json({
        error: error,
        message: 'somethig Went Worng...!',
      });
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateProductDto: UpdateProductDto,
    @Res() res: any,
  ) {
    try {
      const updateOne = await this.productService.update(id, UpdateProductDto);
      res.json({
        data: updateOne,
        message: 'updateOne successfully..!',
      });
    } catch (error) {
      console.log(error.message);
      res.json({
        error: error,
        message: 'somethig Went Worng...!',
      });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: any) {
    try {
      const removeOne = await this.productService.remove(id);
      res.json({
        message: 'removeOne successfully..!',
      });
    } catch (error) {
      res.json({
        error: error,
        message: 'somethig Went Worng...!',
      });
    }
  }
}
