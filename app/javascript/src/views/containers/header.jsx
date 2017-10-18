import React from 'react';
import PropTypes from 'prop-types';
import HeaderBottom from '../components/HeaderBottom';
import HeaderTop from '../components/HeaderTop';
import {
  HeadTopContainer,
  HeadBottomContainer,
} from '../components/header';

const Header = props => {
  const { route } = props;
  return (
    <header>
      <HeadTopContainer className="header_top">
        <HeaderTop />
      </HeadTopContainer>
      <HeadBottomContainer className="header_bottom">
        <HeaderBottom route={route} />
      </HeadBottomContainer>
    </header>
  );
};

Header.propTypes = { route: PropTypes.string };

export default Header;
