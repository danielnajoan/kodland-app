import React, { useState, memo } from "react";
import { Container, CardButton } from "../../globalStyles";
import {
  BaseSection,
  CardContainer,
  CardSection,
  CardInfo,
  ImageContainer,
  CardImage,
  CardDescription,
  CardHeadline,
  CardWrapper,
  CardParagraph,
  ContainerPrice,
  CardPrice,
  ButtonWrapper,
  ButtonRedirect,
  ButtonImage,
} from "./Product.elements";

const Product = ({ productsData }) => {
  const [productCards] = useState(productsData);
  return (
    <>
      <BaseSection>
        <Container>
          <CardContainer>
            {productCards.map((productData) => {
              const {
                id,
                imageUrl,
                imageName,
                headline,
                paragraph,
                price,
                urlButton,
                buttonImageUrl,
                buttonImageName,
              } = productData;
              return (
                <CardSection key={id}>
                  <CardInfo>
                    <ImageContainer>
                      <CardImage src={imageUrl} alt={imageName} />
                    </ImageContainer>
                    <CardDescription>
                      <CardHeadline>{headline}</CardHeadline>
                      <CardWrapper>
                        <CardParagraph>{paragraph}</CardParagraph>
                      </CardWrapper>
                      <ContainerPrice>
                        <CardPrice>{price}</CardPrice>
                        <ButtonWrapper>
                          <ButtonRedirect href={urlButton}>
                            <CardButton>
                              <ButtonImage
                                src={buttonImageUrl}
                                alt={buttonImageName}
                              />
                            </CardButton>
                          </ButtonRedirect>
                        </ButtonWrapper>
                      </ContainerPrice>
                    </CardDescription>
                  </CardInfo>
                </CardSection>
              );
            })}
          </CardContainer>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(Product);
