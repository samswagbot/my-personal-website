import React from 'react';
import styled from 'styled-components';
import MainContainer from './components/MainContainer';
import djing from "Assets/images/djing.jpg"
import libreLogo from "Assets/images/libre-logo.png";
import { Paragraph, Anchor, H1 } from 'Components/components';

const MiniPlayer = styled.iframe`
    width: 100%;
    height: 120px; 
    border: none;
    margin-top: 50px;
`
const StyledDJingCtn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
const SingleMixCtn = styled.div`
  display: flex;
  width: 100%;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const LibreLogoCtn = styled.div`
    height: 200px;
    width: 60%;
    margin-top: 50px;
`

const MixesHeader = styled(H1)`
    text-transform: uppercase;
    margin: 0px;
    text-align: center;
`
const StyledVideoCtn = styled.iframe`
  width: 100%;
  height: 700px;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: ${p => p.theme.opacity.mainOpacity};
  }
`;

const Djing = () => {
    const firstLibreSet = "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fpapisamson%2Ffirst-libre-set%2F";    
    const libreNoBarSet =
      "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fpapisamson%2Flibre-no-bar%2F";
    const quarinteaseSet = "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fpapisamson%2Fquarintease%2F" ;
    const libreHandle = "https://www.instagram.com/wheresthatbitch_libre/";
    const libreVideo = "https://www.instagram.com/p/B99ytU1lgqq/embed";
    return (
      <MainContainer>
        <StyledDJingCtn>
          <StyledImg src={djing} alt="me djing" />
          <Paragraph>
            I'm a co-founder and dj of a queer collective, a celebration
            centering queer and trans* folx of the diaspora and those who love
            us. Libre has given me the platform to discover and curate music of
            the world. World music is my genre with a heavy influence on Latinx
            music. Have a listen below and check out Libre on{" "}
            <Anchor href={libreHandle} target="_blank">Instagram</Anchor> or see our party below!
          </Paragraph>
          <MixesHeader>Mixes</MixesHeader>
          <SingleMixCtn>
            <MiniPlayer src={quarinteaseSet} frameborder="0" />
          </SingleMixCtn>
                <SingleMixCtn>
                    <MiniPlayer src={libreNoBarSet} frameborder="0" />
                </SingleMixCtn>
                <SingleMixCtn>
                    <MiniPlayer src={firstLibreSet} frameborder="0" />
                </SingleMixCtn>
                <LibreLogoCtn>
                    <StyledImg src={libreLogo} alt="libre logo" />
                </LibreLogoCtn>
                <StyledVideoCtn src={libreVideo} />
        </StyledDJingCtn>
      </MainContainer>
    ); 
};

export default Djing;
