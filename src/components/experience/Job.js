import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paragraph, DetailText, Span } from 'Components/components';

const RoleCtn = styled.div`
  margin-bottom: 30px;
`;
const RoleSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${p => p.theme.fontSizes.medium};
  margin-bottom: 10px;
`;
const StyledRole = styled.h3`
  color: ${p => p.theme.colors.burgundy};
  margin: 0;
`;

const StyledJobTerm = styled(Span)`
  color: ${p => p.theme.colors.taxiYellow};
  font-weight: ${p => p.theme.fontWeight.extraBold};
`;

const StyledSkillSection = styled(DetailText)`
  width: 75%;
`;
const JobDuties = styled(Paragraph)`
  line-height: 25px;
  margin-top: 5px;
  width: 75%;
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
