import React from 'react';
import Page from '../../components/Page/Page';
import HomePrimeInfo from '../../components/HomePrimeInfo/HomePrimeInfo';
import Cover from '../../components/Cover/Cover';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import SliderItem from '../../components/SliderItem/SliderItem';
import HomeWelcome from '../../components/HomeWelcome/HomeWelcome';
import HomeGreetings from '../../components/HomeGreetings/HomeGreetings';
import HomeAbout from '../../components/HomeAbout/HomeAbout';

const Home = function(props) {
  return (
    <Page>
      <Header />
      <Cover animate={ true }>
        <Slider>
          <SliderItem>
            <HomeWelcome />
          </SliderItem>
        </Slider>
      </Cover>
      <HomePrimeInfo />
      <HomeGreetings />
      <HomeAbout />
    </Page>
  );
};

export default Home;
