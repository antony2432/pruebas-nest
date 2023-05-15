import {
  Controller,
  Get,
  Body,
  Post,
  Delete,
  Param,
  Patch,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductDto, UpdatedFieldsDto } from './dto/product.dto'

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts()
  }
  @Post()
  createProduct(@Body() newProduct: CreateProductDto) {
    return this.productService.createProduct(
      newProduct.title,
      newProduct.description,
    )
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id)
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id)
  }

  @Patch(':id')
  updateProductById(
    @Param('id') id: string,
    @Body() updatedFields: UpdatedFieldsDto,
  ) {
    return this.productService.updateProductByID(id, updatedFields)
  }
}
