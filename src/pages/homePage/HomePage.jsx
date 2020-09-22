import React from 'react';
import Directory from '../../components/directory/Directory';
import "./HomePage.styles";
import { HomePageContainer } from './HomePage.styles';

// import './HomePage.scss';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;