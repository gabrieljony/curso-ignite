import { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import { client } from '../../lib/prismic';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Document[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const recomendedProducts = await client().query([
        Prismic.Predicates.at('document.type', 'prod')
      ]);
      console.log('recomendedProducts', recomendedProducts)
      console.log('recomendedProducts', recomendedProducts.results)
      setProducts(recomendedProducts.results)
    }

    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map((product: Document) => (
        <li key={product.id}>
          <img src={product.data.thumbnail.url} alt={product.data.thumbnail.alt} />
          <strong>{product.data.title[0].text}</strong>
          <span>{product.data.price}</span>
          <button
            type="button"
            data-testid="add-product-button"
          >
            <div data-testid="cart-product-quantity">
              <MdAddShoppingCart size={16} color="#FFF" />
              2
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default Home;
