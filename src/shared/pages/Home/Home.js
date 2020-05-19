import React from "react";
import Page from "../../components/Page/Page";
import Header from "../../components/Header/Header";
import PrimaryHeader from "../../components/PrimaryHeader/PrimaryHeader";
import Cover from "../../components/Cover/Cover";
import Slider from "../../components/Slider/Slider";
import SliderItem from "../../components/SliderItem/SliderItem";
import HomeWelcome from "../../components/HomeWelcome/HomeWelcome";
import HomePrimeInfo from "../../components/HomePrimeInfo/HomePrimeInfo";
import HomeGreetings from "../../components/HomeGreetings/HomeGreetings";
import HomeAbout from "../../components/HomeAbout/HomeAbout";

const Home = function (props) {
  return (
    <Page name="home">
      <Header theme="transparent" component={<PrimaryHeader logo="ipa" />} />
      <Cover animate={true}>
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
