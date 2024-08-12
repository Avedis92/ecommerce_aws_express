class ProductService {
  getProductByIdService(id) {
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
  getProductsByCategoryService(category) {
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
