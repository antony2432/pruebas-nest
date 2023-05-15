import { Injectable } from '@nestjs/common'
import { Product, DiscountStatus } from './product.entity'
import { v4 } from 'uuid'
import { UpdatedFieldsDto } from './dto/product.dto'

@Injectable()
export class ProductsService {
  private Products: Product[] = [
    {
      id: '1',
      title: 'Mouse Gamer',
      description: 'This mouse is beautiful',
      discount: DiscountStatus.Percent_10,
    },
  ]

  getAllProducts() {
    return this.Products
  }
  createProduct(title: string, description: string) {
    const newProduct: Product = {
      id: v4(),
      title,
      description,
      discount: DiscountStatus.none,
    }
    this.Products.push(newProduct)
    return newProduct
  }
  deleteProduct(id: string) {
    this.Products = this.Products.filter(p => p.id !== id)
    return { message: 'deleted successfully' }
  }

  getProductById(id: string): Product | { message: string } {
    try {
      const findProduct = this.Products.find(p => p.id === id)
      if (Boolean(findProduct)) {
        return findProduct
      } else {
        throw new Error('id not found')
      }
    } catch ({ message }) {
      return { message }
    }
  }

  updateProductByID(id: string, updatedFields: UpdatedFieldsDto) {
    try {
      const findProduct = this.getProductById(id)
      if ('message' in findProduct) {
        throw new Error(findProduct.message)
      } else {
        const newProduct = Object.assign(findProduct, updatedFields)
        this.Products = this.Products.map(p => (p.id === id ? newProduct : p))
        return newProduct
      }
    } catch ({ message }) {
      return { message }
    }
  }
}
