import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/">Work</Link>
      </li>
      <li>
        <a href="https://medium.com/@robert.m.fostr">Medium</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
