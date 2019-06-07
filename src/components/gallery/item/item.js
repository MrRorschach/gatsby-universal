import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Container, A } from './item.css';

const round = {
  borderRadius: '2px 2px 0px 0px',
};
const Item = ({ title, copy, image, link }) => (
  <Container>
    <Img
      style={round}
      fluid={image ? image.childImageSharp.fluid : {}}
      alt={title}
    />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <A href={link}>Find out more</A>
    </figcaption>
  </Container>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.url,
};

export default Item;
