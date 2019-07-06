import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  background-color: rgb(42, 40, 89);
  a {
    color: white;
    font-weight: 700;
    transition: color 0.2s ease;
    text-decoration: none;
    border: 2px solid rgb(249, 198, 107);
    padding: 15px;

    &:hover {
      color: lightgrey;
    }
  }
  a[href='/'] {
    border: none;
  }
`;
