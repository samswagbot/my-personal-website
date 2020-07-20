import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paragraph, DetailText, Span } from 'Components/components';

const RoleCtn = styled.div`
  margin-bottom: 30px;
`;
const RoleSection = styled.div`
  @media ${p => p.theme.device.mobileS} {
    flex-direction: column;
    align-items: center;
  }

  @media ${p => p.theme.device.laptop} {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-between;
    font-size: ${p => p.theme.fontSizes.medium};
  }
`;
const StyledRole = styled.h3`
  color: ${p => p.theme.colors.burgundy};
  margin: 0;

  @media ${p => p.theme.device.mobileS} {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    text-align: center;

    span {
      align-self: center;
      margin: 5px;
      font-size: ${p => p.theme.fontSizes.small};
    }
  }

  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes.medium};

    span {
      align-self: center;
      margin: 5px;
      font-size: ${p => p.theme.fontSizes.small};
    }
  }

  @media ${p => p.theme.device.laptop} {
    text-align: left;
    font-size: ${p => p.theme.fontSizes.average};

    span {
      align-self: flex-start;
      font-size: ${p => p.theme.fontSizes.medium};
      margin-left: 0;
    }
  }
`;

const StyledJobTerm = styled(Span)`
  color: ${p => p.theme.colors.taxiYellow};
  font-weight: ${p => p.theme.fontWeight.extraBold};
  display: flex;
  @media ${p => p.theme.device.mobileS} {
    justify-content: center;
    margin: 5px 0;
  }

  @media ${p => p.theme.device.laptop} {
    justify-content: flex-end;
  }
`;

const StyledSkillSection = styled(DetailText)`
  @media ${p => p.theme.device.mobileS} {
    width: 100%;
    text-align: left;
    line-height: 18px;
  }
`;
const JobDuties = styled(Paragraph)`
  line-height: 25px;
  margin-top: 5px;

  @media ${p => p.theme.device.mobileS} {
    margin-top: 12px;
    width: 100%;
    text-align: left;
  }
`;
const Job = ({ job }) => (
  <>
    {job.map((content, index) => (
      <RoleCtn key={index}>
        <RoleSection>
          <StyledRole>
            {content.role}
            <Span>{content.company}</Span>
          </StyledRole>
          <StyledJobTerm>{content.jobTerm}</StyledJobTerm>
        </RoleSection>
        <StyledSkillSection>{content.techStack}</StyledSkillSection>
        {content.jobDuties.map(duties => (
          <JobDuties key={duties}>{duties}</JobDuties>
        ))}
      </RoleCtn>
    ))}
  </>
);

Job.propTypes = {
  job: PropTypes.array,
};

export default Job;
