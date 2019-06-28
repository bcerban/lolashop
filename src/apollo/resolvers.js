const resolvers = {
  User: {
    avatarUrl: (user, _, __) => {
      return `https://api.adorable.io/avatars/285/${user.email}.png`;
    }
  },
  Product: {
    mainImage: (product, _, __) => {
      return product.images && product.images.length 
        ? product.images[0]
        : null; 
    }
  }
};

export default resolvers;