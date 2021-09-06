import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background-color: #02a7d9;
  
  > div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      transition: opacity 0.2s;
  
      &:hover {
        opacity: 0.7;
      }
    }
  }

`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
