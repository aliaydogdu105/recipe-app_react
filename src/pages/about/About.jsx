import { AboutContainer, InfoContainer, StyledImage } from "./About.styled";

import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Software Developer <span>Ali</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Ali</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB, SQL,
          Python, Django.
        </h4>
        <h2>
          <a href="mailto:aliaydogdu105@gmail.com">Send email</a> :
          aliaydogdu105@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
