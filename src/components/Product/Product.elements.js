import styled from "styled-components";

export const BaseSection = styled.div`
  padding: 50px 0;
  background: #ffffff;
  @media screen and (max-width: 321px) {
    padding: 30px 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardSection = styled.div``;

export const CardInfo = styled.div`
  width: 300px;
  height: auto;
  margin: 1rem;
  flex: 1;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  @media screen and (max-width: 541px) {
    justify-content: center;
  }
`;

export const CardImage = styled.img`
  width: 300px;
  height: 205px;
`;

export const CardDescription = styled.div`
  margin: 30px 25px;
`;

export const CardHeadline = styled.h2`
  font-size: 20px;
  color: #333333;
  margin-bottom: 1rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  word-wrap: normal;
  @media screen and (max-width: 541px) {
    justify-content: center;
  }
`;

export const CardParagraph = styled.p`
  font-size: 15px;
  color: #666666;
  width: 75%;
  margin-bottom: 1rem;
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CardPrice = styled.h2`
  font-size: 35px;
  color: #333333;
  width: 50%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;
export const ButtonRedirect = styled.a`
  text-decoration: none;
`;

export const ButtonImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
