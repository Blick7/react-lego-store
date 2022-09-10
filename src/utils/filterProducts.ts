import { IInitialFilters } from '../store/filter/types';
import { Products } from '../store/products/types';

const filterProducts = (productsState: Products, filters: IInitialFilters) => {
  // filter productType
  let products = Object.values(productsState);

  if (filters.categories.productType.length !== 0) {
    products = products.filter((product) =>
      filters.categories.productType.includes(product.productType)
    );
  }

  // filter PRICE

  let priceMin = 0;
  let priceMax = 0;

  filters.categories.price.forEach((price) => {
    let min = +price.split('-')[0].replace(/[^0-9]/g, '');
    let max;
    if (price.split('-')[1] !== undefined) {
      max = +price.split('-')[1].replace(/[^0-9]/g, '');
    } else {
      max = 100000000; // if max value is not set in filter, then set max value manually
    }
    if (min > priceMin) priceMin = min;
    if (max > priceMax) priceMax = max;
  });

  if (filters.categories.price.length !== 0) {
    products = products.filter((product) => {
      return product.price >= priceMin && product.price <= priceMax;
    });
  }

  // filter THEME
  if (filters.categories.theme.length !== 0) {
    products = products.filter((product) =>
      filters.categories.theme.includes(product.theme)
    );
  }

  // filter AGE
  if (filters.categories.ages.length !== 0) {
    products = products.filter((product) =>
      filters.categories.ages.includes(product.ages)
    );
  }

  // filter AVALIABILITY
  if (filters.categories.avaliability.length !== 0) {
    products = products.filter((product) =>
      filters.categories.avaliability.includes(product.avaliability)
    );
  }

  // filter PIECE_COUNT

  let piecesMin = 0;
  let piecesMax = 0;

  filters.categories.pieces.forEach((pieces) => {
    let min = +pieces.split('-')[0].replace(/[^0-9]/g, '');
    let max;
    if (pieces.split('-')[1] !== undefined) {
      max = +pieces.split('-')[1].replace(/[^0-9]/g, '');
    } else {
      max = 100000000; // if max value is not set in filter, then set max value manually
    }
    if (min > piecesMin) piecesMin = min;
    if (max > piecesMax) piecesMax = max;
  });

  if (filters.categories.pieces.length !== 0) {
    products = products.filter((product) => {
      return product.pieces >= piecesMin && product.pieces <= piecesMax;
    });
  }

  // filter FEATURED
  if (filters.categories.featured.length !== 0) {
    products = products.filter((product) =>
      filters.categories.featured.includes(product.featured)
    );
  }

  return products;
};

export default filterProducts;
