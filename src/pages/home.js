import React from "react";
import { OptForm } from "../components";
import HeaderContainer from "../containers/header";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
import {Feature} from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer>
          <Feature>
              <Feature.Title>Unlimited Films, Tv Programmes and more</Feature.Title>
              <Feature.Subtitle>Watch Anywhere. Cancel At Anytime</Feature.Subtitle>
          </Feature>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try it Now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to Watch? Enter Your Email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
