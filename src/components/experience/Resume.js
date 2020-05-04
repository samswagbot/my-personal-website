import React from 'react';
import styled from 'styled-components';
import data from '../../../data.json';
import { Job } from 'Components/components';
import { DownloadIcon } from 'Assets/svgs/svgs';
import { ResumeFile } from '../../assets/documents/documents';

const StyledJobCtn = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 50%;
    text-align: ${p => p.theme.fontAlign.left};
`
const StyledResumeSectionTitles = styled.h3`
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeight.bold};
    font-size: ${p => p.theme.fontSizes.large};
    color: ${p => p.theme.colors.lightGray};
    display: flex;
    margin: 50px 0 20px 0;
`

const StyledResumeDownload = styled.a`
    background-color: ${p => p.theme.colors.taxiYellow};
    border-radius: 5px;
    display: flex;
    color: white;  
    justify-content: center;
    padding: 15px;
    font-size: 20px;
    letter-spacing: 2px;
    cursor: pointer;
    text-decoration-line: none;
        &:hover {
            opacity: ${p => p.theme.opacity.mainOpacity};
        }

`
const Resume = () => {
   
    return (
        <StyledJobCtn>
             <StyledResumeDownload href={ResumeFile} download="Samson Mossallam's Resume">
                    Download <DownloadIcon style={{ marginLeft: "5px" }} />
            </StyledResumeDownload>
                {Object.entries(data).map(resumeTitles => {
                    return (  
                        <div key={resumeTitles}>
                            <StyledResumeSectionTitles >
                                {resumeTitles[0]}
                            </StyledResumeSectionTitles>
                            <Job job={resumeTitles[1]}/>
                        </div>
                    )
                })}                   
        </StyledJobCtn>
    )
}

export default Resume