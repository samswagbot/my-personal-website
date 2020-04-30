import React  from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoleCtn = styled.div`
     margin-bottom: 30px;
`
const RoleSection = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${p => p.theme.fontSizes.medium};
    margin-bottom: 10px;
`
const StyledRole = styled.h3`
    color: ${p => p.theme.colors.burgundy};
    margin: 0;
`
const StyledCompany = styled.span`
    font-size: ${p => p.theme.fontSizes.small};
    display: flex;
    align-self: center;
`
const JobTerm = styled.h4`
    color: ${p => p.theme.colors.taxiYellow};
    text-align: ${p => p.theme.fontAlign.right};
    display: flex;
    align-self: flex-start;
    margin: 0;
`
const StyledSkillSection = styled.div`
    color: ${p => p.theme.colors.lightGray};
    font-size: ${p => p.theme.fontSizes.extraSmall};
    letter-spacing: 2px;
`
const JobDuties = styled.p`
    text-align: ${p => p.theme.fontAlign.justify};
    line-height: 25px;
    margin-top: 5px;
    a {
        cursor: pointer;
        text-decoration: none;    
        color: ${p => p.theme.colors.burgundy};
        transition: opacity .5s, border-bottom .5s;
        font-weight: ${p => p.theme.fontWeight.extraBold};
            &:hover {
                border-bottom: ${p => p.theme.borders.navItemBottomBorderActive};
                opacity: ${p => p.theme.opacity.mainOpacity};
            }
            &:visited {
                color: ${p => p.theme.colors.lightGray};
                &:hover {
                    border-bottom: ${p => p.theme.borders.navItemBottomBorderVisited};
                    opacity: ${p => p.theme.opacity.mainOpacity};
                }
            }
        }
    
`
const Job = ({ job }) => {
    return (
        <>
            {job.map((content, index) => {
                return (
                        <RoleCtn key={index}>
                            <RoleSection>
                                <StyledRole>
                                    {content.role}
                                    <StyledCompany>
                                        {content.company}
                                    </StyledCompany>
                                </StyledRole>
                                <JobTerm>
                                    {content.jobTerm}
                                </JobTerm>
                            </RoleSection>
                            <StyledSkillSection>
                                {content.techStack}
                            </StyledSkillSection>
                                {content.jobDuties.map(duties => {
                                    return (
                                            <JobDuties key={duties}>
                                                {duties}
                                            </JobDuties>
                                        )}
                                )}
                        </RoleCtn>
                )
            })}
        </>
    )
}

Job.propTypes = {
    job: PropTypes.array
}

export default Job;
