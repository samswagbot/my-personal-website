import React from 'react';
import styled from 'styled-components';
import { GithubIcon } from 'Assets/svgs/svgs';
import { Paragraph, DetailText, Span, H3, Anchor, MainContainer } from 'Components/components';


const StyledCodeCtn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const SinglCodeCtn = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin-top: 50px;
  border-bottom: 1px solid ${p => p.theme.colors.lightGray};
  padding-bottom: 50px;
`;
const StyledCodeSectionTitles = styled(H3)`
  text-transform: uppercase;
  color: ${p => p.theme.colors.lightGray};
  margin-top: 0;
`;

const StyledHeadingCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;
const StyledCodeSandBox = styled.iframe`
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
`;
const YearCreated = styled(Span)`
  background-color: ${p => p.theme.colors.taxiYellow};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.tiny};
  padding: 3px;
  border-radius: 5px;
  align-self: flex-start;
`;

const StyledCodeSummary = styled(Paragraph)`
  line-height: 25px;
  text-align: left;
`;

const GithubAncor = styled(Anchor)`
  background-color: ${p => p.theme.colors.taxiYellow};
  border-radius: 5px;
  padding: 9px 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const StyledCodeCtnText = styled.div`
  justify-content: center;
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const Code = () => {
  const gitHubChatApp = 'https://github.com/samswagbot/chat-app';
  const gitHubFindFrequentTool =
    'https://github.com/samswagbot/find-frequent-word-tool';
  const gitHubLandingPage = 'https://github.com/samswagbot/landing-page';

  const chatAppCB =
    'https://codesandbox.io/embed/chat-app-r0gkn?fontsize=14&hidenavigation=1&theme=dark';

  const findMostFrequentWordCB =
    'https://codesandbox.io/embed/find-frequent-word-tool-rfkwu?fontsize=14&hidenavigation=1&theme=dark';

  const landingPageCB =
    'https://codesandbox.io/embed/landing-page-de0ob?fontsize=14&hidenavigation=1&theme=dark';

  return (
    <MainContainer>
      <StyledCodeCtn>
        <SinglCodeCtn>
          <StyledCodeSandBox
            src={chatAppCB}
            title="Chat App"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
          <StyledCodeCtnText>
            <StyledHeadingCtn>
              <StyledCodeSectionTitles>Chat app</StyledCodeSectionTitles>
              <YearCreated>2019</YearCreated>
            </StyledHeadingCtn>
            <StyledCodeSummary>
              A single-user timeline of posts and messages, which is responsive
              and scales to viewport size.
            </StyledCodeSummary>
            <DetailText>
              Built With: ReactJS, ES6/JavaScript, Webpack, Express, Styled
              Components, Material UI
            </DetailText>
            <GithubAncor href={gitHubChatApp} target="_blank">
              <GithubIcon />
            </GithubAncor>
          </StyledCodeCtnText>
        </SinglCodeCtn>
        <SinglCodeCtn>
          <StyledCodeSandBox
            src={findMostFrequentWordCB}
            title="Find Most Frequent Word and Phrase Tool"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
          <StyledCodeCtnText>
            <StyledHeadingCtn>
              <StyledCodeSectionTitles>
                Find Most Frequent Word and Phrase Tool
              </StyledCodeSectionTitles>
              <YearCreated>2019</YearCreated>
            </StyledHeadingCtn>
            <StyledCodeSummary>
              A program that finds the most frequent word or phrase based on
              students test scores.
            </StyledCodeSummary>
            <DetailText>Built With: ES6/JavaScript, Node.js</DetailText>
            <GithubAncor href={gitHubFindFrequentTool} target="_blank">
              <GithubIcon />
            </GithubAncor>
          </StyledCodeCtnText>
        </SinglCodeCtn>
        <SinglCodeCtn>
          <StyledCodeSandBox
            src={landingPageCB}
            title="landing-page"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
          <StyledCodeCtnText>
            <StyledHeadingCtn>
              <StyledCodeSectionTitles>Landing Page</StyledCodeSectionTitles>
              <YearCreated>2020</YearCreated>
            </StyledHeadingCtn>
            <StyledCodeSummary>A simple landing page</StyledCodeSummary>
            <DetailText>Built With: HTML5, CSS3 </DetailText>
            <GithubAncor href={gitHubLandingPage} target="_blank">
              <GithubIcon />
            </GithubAncor>
          </StyledCodeCtnText>
        </SinglCodeCtn>
      </StyledCodeCtn>
    </MainContainer>
  );
};

export default Code;
