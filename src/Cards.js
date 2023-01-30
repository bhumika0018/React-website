import styled from "styled-components";
import Card from "./Card";
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100vh;
  gap: 25px;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export default function Cards() {
  return (
    <MainContainer>
      <Card
        image={"/1.jpg"}
        title={"White Traditional Long Dress"}
        oldPrice={"$5.99"}
        newPrice={"$3.99"}
        color1={"#999"}
        color2={"tomato"}
        color3={"cyan"}
        rating={"4.8"}
        couponName={"Monday Happy"}
        couponCode={"#MONHPY"}
        discount={"20%"}
      />
      <Card
        image={"/2.jpg"}
        title={"Long sleeve denim jacket"}
        oldPrice={"$5.99"}
        newPrice={"$3.99"}
        color1={"grey"}
        color2={"steelblue"}
        rating={"4.8"}
        couponName={"Payday Supe "}
        couponCode={"#SRPSPYDY"}
        discount={"20%"}
      />
      <Card
        image={"/3.jpg"}
        title={"Hush Puppies"}
        oldPrice={"$5.99"}
        newPrice={"$3.99"}
        color1={"yellow"}
        color2={"tomato"}
        rating={"4.2"}
        couponName={"Happy First"}
        couponCode={"#HPYFRST"}
        discount={"20%"}
      />
      <Card
        image={"/4.jpg"}
        title={" Athens skirt"}
        oldPrice={"$5.99"}
        newPrice={"$3.99"}
        color2={"brown"}
        color3={"steelblue"}
        rating={"3.8"}
        couponName={"Vegan Food"}
        couponCode={"#VEGANLOVE"}
        discount={"20%"}
      />
    </MainContainer>
  );
}
