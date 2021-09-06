import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import GitHubLogo from "../images/github.svg"
import StackOverflowLogo from "../images/stack-overflow.svg"
import LinkedInLogo from "../images/linkedin.svg"
import MeetupLogo from "../images/meetup.svg"
import TwitchLogo from "../images/twitch.svg"
import TwitterLogo from "../images/twitter.svg"


const Container = styled.div`
  text-align: center;
`;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 85vh;
`;

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  text-align: left;
`;

const Breaker = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`;

const Item = styled.li`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const HorizontalItem = styled.li`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  float: left;
`;

const Link = styled.a`
`

const VerticalList = styled.ul`
`

const HorizontalList = styled.ul`
  list-style-type: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
`

const LandingBio = () => (
  <OuterContainer>
    <Container>
      <NameHeader>Hi Everyone! I am Andi</NameHeader>
      <Description>
        <Breaker>and I am the</Breaker>
        <VerticalList>
          <Item>Community Manager of <Link href='https://specflow.org'>SpecFlow</Link></Item>
          <Item>Founder of <Link href='https://dotnetdevs.at'>DotNetDevs.at</Link></Item>
          <Item>Speaker</Item>
          <Item>Father</Item>
          <Item>Inpatient for Bullshit</Item>
        </VerticalList>
      </Description>
      <p style={{height: "2rem"}}></p>
      <div >
        <HorizontalList>
          <HorizontalItem><Link href='https://github.com/sabotageandi'><img src={GitHubLogo} alt='Link to GitHub Profile'></img></Link></HorizontalItem>
          <HorizontalItem><Link href='https://twitter.com/sabotageandi'><img src={TwitterLogo} alt='Link to Twitter Profile'></img></Link></HorizontalItem>
          <HorizontalItem><Link href='https://stackoverflow.com/users/3155323/andreas-willich'><img src={StackOverflowLogo} alt='Link to Stack Overflow Profile'></img></Link></HorizontalItem>
          <HorizontalItem><Link href='https://www.linkedin.com/in/andreas-willich-572b74106/' ><img src={LinkedInLogo} alt='Link to LinkedIn Profile'></img></Link></HorizontalItem>
          <HorizontalItem><Link href='https://www.twitch.tv/sabotageandi'><img src={TwitchLogo} alt='Link to Twitch.tv Profile'></img></Link></HorizontalItem>
          <HorizontalItem><Link href='https://www.meetup.com/members/184334738/'><img src={MeetupLogo} alt='Link to Meetup Profile'></img></Link></HorizontalItem>
        </HorizontalList>
      </div>
    </Container>
  </OuterContainer>
);

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
};

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
};

export default LandingBio;
