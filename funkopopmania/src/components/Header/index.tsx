import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/funko-logo-white.svg';
import { Container, Cart } from './styles';

const Header = (): JSX.Element => {

  return (
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="Rocketshoes" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span data-testid="cart-size">
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </div>
    </Container>
  );
};

export default Header;
