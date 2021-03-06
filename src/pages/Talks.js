import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TransToolKit, LesbiansWhoTech } from 'Assets/documents/documents';
import speaker from 'Assets/images/speaker.jpg';
import { H1, Anchor, Paragraph, H3 } from 'Components/components';
import MainContainer from './components/MainContainer';

const StyledVideoCtn = styled.iframe`
  width: 100%;
  height: 700px;
  cursor: pointer;
  &:hover {
    opacity: ${p => p.theme.opacity.mainOpacity};
  }
`;
const StyledTalksCtn = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const SinglTalkCtn = styled.div`
  width: 35%;
`;
const StyledTalkSectionTitles = styled(H3)`
  text-transform: uppercase;
  margin: 10px 0px;
  justify-content: flex-start;
`;

const TalkDetails = styled(Paragraph)`
  line-height: 25px;
  margin-top: 5px;
`;

const StyledTalksImg = styled.img`
  margin-top: 40px;
  width: 100%;
  height: auto;
`;
const StyledTalksTitles = styled(H1)`
  &:first-child {
    margin: 10px 0;
  }
`;
const Talks = () => {
  const prideCampaign = 'https://www.instagram.com/p/ByQMiJpnUQC/embed';
  const warriorWeek = 'https://www.instagram.com/p/BrDiYTrlY02/embed';
  const [transTalk, setTransTalk] = useState('');
  useEffect(() => {
    const insta = async () => {
      const res = await fetch('https://www.instagram.com/p/Bkqcr1NAS8P/embed');
      console.log(res);
      setTransTalk(res.url);
    };
    insta();
  }, []);

  return (
    <MainContainer>
      <StyledTalksCtn>
        <SinglTalkCtn>
          <StyledTalksTitles>Talks</StyledTalksTitles>
          <StyledVideoCtn src={transTalk} frameBorder="0" allowfullscreen />
          <StyledTalkSectionTitles>
            My journey as a trans person
          </StyledTalkSectionTitles>
          <TalkDetails>
            My mission to change the everyday life experience of transgender
            people. In 2016, I started my medical transition from female to male
            and I decided to share my story with SoulCycle to build strong
            alliances through education. I continue to any oppurtunity to share
            my experience and build trans visability in the workplace.
          </TalkDetails>
          <TalkDetails>
            "Freedom is the ability to be yourself without permission".
            <Anchor href={TransToolKit} download="Trans Tool Kit">
              {' '}
              Trans Toolkit
            </Anchor>
          </TalkDetails>
        </SinglTalkCtn>
        <SinglTalkCtn>
          <StyledTalksImg src={speaker} alt="Photo of me speaking" />
          <StyledTalkSectionTitles>
            Test Driven Development and Pair Programming: What You Need To Know
          </StyledTalkSectionTitles>
          <TalkDetails>
            Invited to lead a workshop on using pair programming and test driven
            development and how it can increase productivity and team moral, a
            conference that featured keynote speaker Susan Wojcicki (CEO,
            YouTube), and Stacey Abrams (Georgia House of Resp) and many more.
            See attached
            <Anchor
              href={LesbiansWhoTech}
              download="Test Driven Development and Pair Programming: What You Need To Know"
            >
              {' '}
              slides{' '}
            </Anchor>
            from conference.
          </TalkDetails>
        </SinglTalkCtn>
        <SinglTalkCtn>
          <StyledTalksTitles>Campaigns</StyledTalksTitles>
          <StyledVideoCtn src={prideCampaign} frameBorder="0" allowfullscreen />
          <StyledTalkSectionTitles>
            SoulCycle's Pride Campaign
          </StyledTalkSectionTitles>
          <TalkDetails>
            Leading the Queer Employee Resource Group, I worked closely with
            marketing to influence and particate a Queer and diverse pride
            campaign.
          </TalkDetails>
          <StyledVideoCtn src={warriorWeek} frameBorder="0" allowfullscreen />
        </SinglTalkCtn>
        <SinglTalkCtn>
          <StyledTalkSectionTitles>
            Warrior Week Campaign
          </StyledTalkSectionTitles>
          <TalkDetails>
            Particapted in quartely marketing campaign for warrior week.
          </TalkDetails>
        </SinglTalkCtn>
      </StyledTalksCtn>
    </MainContainer>
  );
};

export default Talks;
