import React from "react";
import styled from "styled-components";
import { LinkedinIcon } from "Assets/svgs/svgs";
import { Link } from "react-router-dom";
import { Anchor, Paragraph, H3 } from "Components/components";
import { ResumeFile, CoverLetter } from "Assets/documents/documents";

const BuzzWords = styled.span`
  font-weight: ${p => p.theme.fontWeight.extraBold};
  color: ${p => p.theme.colors.burgundy};
`;
const StyledParagraph = styled(Paragraph)`
  svg {
    fill: ${p => p.theme.colors.burgundy};
    position: relative;
    top: 4px;
    left: 4px;
  }
`;
const Bio = () => {
  const linkedin = "https://www.linkedin.com/in/sammossallam/";

  return (
    <div>
      <H3>About:</H3>
      <StyledParagraph>
        I'm currently building products at{" "}
        <Anchor href=" https://www.happycog.com/">
          <BuzzWords>Happy Cog</BuzzWords>
        </Anchor>{" "}
        in NY. I'm focused on using my skills as a Front End Developer to build
        elegant and sophisticated software. Developing clean code is always at
        the front of my mind and upmost priority. With my experiance at
        <BuzzWords> SoulCycle & Goldman Sachs</BuzzWords>, I applied my passion
        for Front End technologies by contributing to large scale applications.
        To see more of my previous experiance check out my
        <Anchor href={ResumeFile} download="Samson Mossallam's Resume.pdf">
          {" "}
          resume
        </Anchor>
        ,
        <Anchor
          href={CoverLetter}
          download="Samson Mossallam's Cover Letter.pdf"
        >
          {" "}
          cover letter{" "}
        </Anchor>{" "}
        or
        <Anchor href={linkedin}>
          {" "}
          <LinkedinIcon />
        </Anchor>
        .
      </StyledParagraph>
      <H3>Front End Development:</H3>
      <StyledParagraph>
        <BuzzWords>JavaScript </BuzzWords>
        is my bread and butter and I spend majority of my time using it. Front
        End Development is building out the visual components of a website and
        as an artist this is what excites me the most. Whether it's using
        <BuzzWords> React, TypeScript, HTML, CSS, or Javascript</BuzzWords>, I
        build fast, interactive websites. I'm driven to build sophisticated user
        experiences with the help of my creative problem solving skills as an
        engineer.
      </StyledParagraph>
      <H3>Diversity & Inclusion:</H3>
      <StyledParagraph>
        I lead the conversation on <BuzzWords> queer inclusion </BuzzWords> in
        the work place, and always speak to my story as a
        <BuzzWords> trans person </BuzzWords> to better build allyship. Whether
        it's being a developer or a leader, I search to find effective,
        creative, and smart solutions. Check out my
        <Anchor href="/talksandcampaigns" as={Link}>
          {" "}
          talks and pride{" "}
        </Anchor>{" "}
        at SoulCycle!
      </StyledParagraph>
      <H3>Before Coding:</H3>
      <StyledParagraph>
        Before coding, most of my life was dedicated to music. Whether it was
        studing audio engineering at{" "}
        <BuzzWords>SUNY Purchase Conservatory of Music</BuzzWords>, competing as
        a cellist in state-wide competitons or more recently, falling in love
        with DJing music continues to find a way into my life.
      </StyledParagraph>
    </div>
  );
};

export default Bio;
