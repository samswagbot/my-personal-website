import React from 'react';
import styled from 'styled-components';
import { Job, Anchor, H2 } from 'Components/components';
import { DownloadIcon } from 'Assets/svgs/svgs';
import data from '../../../data.json';
import { ResumeFile } from '../../assets/documents/documents';

const StyledJobCtn = styled.div`
  text-align: ${p => p.theme.fontAlign.left};
`;
const StyledResumeSectionTitles = styled(H2)`
  text-transform: uppercase;
  display: flex;

  @media ${p => p.theme.device.mobileS} {
    margin: 30px 0 5px 0;
    justify-content: center;
    font-size: 24px;
  }

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes.large};
  }

  @media ${p => p.theme.device.laptop} {
    justify-content: flex-start;
    margin: 50px 0 10px 0;
  }
`;
const StyledResumeDownload = styled(Anchor)`
  background-color: ${p => p.theme.colors.taxiYellow};
  border-radius: 5px;
  display: flex;
  color: ${p => p.theme.colors.white};
  justify-content: center;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: ${p => p.theme.fontWeight.bold};
  &:visited {
    color: ${p => p.theme.colors.white};
  }

  @media ${p => p.theme.device.mobileS} {
    padding: 8px;
  }

  @media ${p => p.theme.device.laptop} {
    padding: 15px;
  }
`;
const Resume = () => (
  <StyledJobCtn>
    <StyledResumeDownload
      href={ResumeFile}
      download="Samson Mossallam's Resume"
    >
      Download
      <DownloadIcon style={{ marginLeft: '5px' }} />
    </StyledResumeDownload>
    {Object.entries(data).map(resumeTitles => (
      <div key={resumeTitles}>
        <StyledResumeSectionTitles>{resumeTitles[0]}</StyledResumeSectionTitles>
        <Job job={resumeTitles[1]} />
      </div>
    ))}
  </StyledJobCtn>
);

export default Resume;
