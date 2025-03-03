import React from 'react';
import PropTypes from 'prop-types';
import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import MainComponent from '../MainComponent/MainComponent';
const HomeComponent = () => (
  <div data-testid="HomeComponent">
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
