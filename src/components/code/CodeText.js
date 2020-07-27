import React from "react";
import styled from "styled-components";

import { H3, Span, Paragraph, DetailText, Anchor } from "Components/components";

import { GithubIcon } from "Assets/svgs/svgs";

const StyledCodeCtnText = styled.div`
  justify-content: center;
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const StyledHeadingCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;

const StyledCodeSectionTitles = styled(H3)`
  text-transform: uppercase;
  color: ${p => p.theme.colors.lightGray};
  margin-top: 0;
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

const CodeText = ({ year, summary, title, builtWith, github }) => {
  return (
    <StyledCodeCtnText>
      <StyledHeadingCtn>
        <StyledCodeSectionTitles>{title}</StyledCodeSectionTitles>
        <YearCreated>{year}</YearCreated>
      </StyledHeadingCtn>
      <StyledCodeSummary>{summary}</StyledCodeSummary>
      <DetailText>{builtWith}</DetailText>
      <GithubAncor href={github} target="_blank">
        <GithubIcon />
      </GithubAncor>
    </StyledCodeCtnText>
  );
};

export default CodeText;
