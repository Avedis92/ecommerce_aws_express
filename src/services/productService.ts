import { IProduct, CategoryType } from "../shared/types";

class ProductService {
  getProductByIdService(id: string): IProduct {
    return {
      id,
      title: "pants",
      description: "skinny pants",
      price: 12,
      quantity: 4,
      rating: 4.5,
      category: "pants",
      imageSource: "blabla",
    };
  }
  getProductsByCategoryService(category: CategoryType): IProduct[] {
    return [
      {
        id: "1",
        title: "pants",
        description: "skinny pants",
        price: 12,
        quantity: 4,
        rating: 4.5,
        category,
        imageSource: "blabla",
      },
    ];
  }
}

const productService = new ProductService();
export default productService;
