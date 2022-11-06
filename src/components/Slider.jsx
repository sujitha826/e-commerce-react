import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: coral;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
`;

const Slide = styled.div`
display: flex;
align-items: center;
height: 100vh;
width: 100vw;
`;

const ImgContainer = styled.div`
flex:1;
height: 100%;
`;

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Image = styled.img`
height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Slider = () => {

    return (
        <div>
            <Container>
                <Arrow direction="left">
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper>
                    <Slide>
                        <ImgContainer>
                            <Image></Image>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>
                                Explore your favourite styles here..
                            </Title>
                        </InfoContainer>
                    </Slide>
                </Wrapper>
                <Arrow direction="right">
                    <ArrowRightOutlined />
                </Arrow>
            </Container>
        </div>

    );
}

export default Slider;