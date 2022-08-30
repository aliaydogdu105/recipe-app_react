import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex";

export const AboutContainer = styled(Flex)`
  flex-direction: column;
  min-height: calc(100vh - 80px);
  line-height: 2;
  span {
    color: white;
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  text-align: start;
  margin: 0 0.7rem;
  max-width: 1000px;
  border: 1px solid white;
  padding: 2rem;
  border-radius: 5px;
  a {
    color: white;
  }
  @media (max-width: 375px) {
    width: 350px;
    word-wrap: break-word;
  }
`;

export const StyledImage = styled.img`
  width: 500px;
  margin-bottom: 2rem;
  @media (max-width: 375px) {
    width: 300px;
  }
`;
