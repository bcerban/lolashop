export const resolvers = {
  Product: {
    mainImage: (product, _, __) => {
      return product.images && product.images.length 
        ? product.images[0]
        : null; 
    }
  }
};