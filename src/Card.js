import React from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 2px 8px 8px #0000002e;
  width: 300px;
  overflow: hidden;
  gap: 30px;
`;
const Image = styled.img`
  border-radius: 0 0 15px 15px;
  height: 300px;
  object-fit: cover;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const H3 = styled.div`
  font-weight: 800;
  font-size: 20px;
  padding: 0 15px;
  color: #222;
`;
const Price = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  gap: 5px;
`;
const NewPrice = styled.div`
  font-size: 21px;
  color: tomato;
  font-weight: 900;
`;
const OldPrice = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #999;
`;
const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;
const Colors = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
const Color = styled.div`
  height: 25px;
  width: 25px;
  border: 3px solid ${({ color }) => color};
  display: flex;
  border-radius: 25px;
  font-size: 13px;
  justify-content: center;
  align-items: center;

  ${({ color }) => {
    if (!color) return `display:none;`;
  }}
`;
const Sizes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
const Size = styled.div`
  height: 25px;
  width: 25px;
  border: 2px solid #888888ab;
  display: flex;
  border-radius: 25px;
  font-size: 13px;
  justify-content: center;
  align-items: center;
`;
const ThirdLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  padding-bottom: 20px;
  align-items: center;
`;
const Rating = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  height: 33px;
  align-items: center;
`;
const RatingText = styled.div`
  margin-top: -2px;
`;
const RatingIcon = styled.div``;
const BuyButton = styled.div`
  font-size: 21px;
  text-transform: uppercase;
  color: hsl(309deg 100% 29%);
  height: 33px;
`;

const CouponContainer = styled.div`
  display: flex;
  flex-direction: row;

  border-radius: 15px;
  overflow: hidden;
  box-shadow: 2px 8px 8px #0000002e;
  width: 300px;
`;
const Coupon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: center;
  width: 62%;
  padding: 25px 0;
`;
const CouponSmall = styled.div`
  opacity: 0.5;
`;
const Discount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 38%;
  justify-content: center;
  padding: 25px 0;
  color: #fff;
  align-items: center;
  background-color: hsl(309deg 100% 29%);
`;
const CouponCode = styled.div`
  color: tomato;
  font-weight: 900;
`;
const DiscountData1 = styled.div``;
const DiscountData2 = styled.div``;

export default function Card({
  image,
  title,
  oldPrice,
  newPrice,
  color1,
  color2,
  color3,
  rating,
  couponName,
  couponCode,
  discount,
}) {
  return (
    <MainContainer>
      <Container>
        <Image src={image} />
        <Heading>
          <H3>{title}</H3>
          <Price>
            <NewPrice>{newPrice}</NewPrice>
            <OldPrice>{oldPrice}</OldPrice>
          </Price>
        </Heading>
        <SecondLine>
          <Colors>
            <Color color={color1}></Color>
            <Color color={color2}></Color>
            <Color color={color3}></Color>
          </Colors>
          <Sizes>
            <Size>S</Size>
            <Size>M</Size>
            <Size>L</Size>
          </Sizes>
        </SecondLine>
        <ThirdLine>
          <Rating>
            <RatingIcon>
              <AiOutlineStar />
            </RatingIcon>
            <RatingText>{rating}</RatingText>{" "}
          </Rating>
          <BuyButton>Buy +</BuyButton>
        </ThirdLine>
      </Container>

      <CouponContainer>
        <Coupon>
          <CouponSmall>{couponName}</CouponSmall>
          <CouponCode>{couponCode}</CouponCode>
        </Coupon>
        <Discount>
          <DiscountData1>{discount}</DiscountData1>
          <DiscountData2>off</DiscountData2>
        </Discount>
      </CouponContainer>
    </MainContainer>
  );
}
