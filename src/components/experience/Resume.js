import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../../data.json';
import { Job } from 'Components/components';
import { DownloadIcon } from 'Assets/svgs/svgs';
import { ResumeFile } from 'Assets/pdfs/pdfs';

const StyledJobCtn = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 60%;
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
    padding: 5px;
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
    const [job, setJob] = useState([])
    
    const header = [
        'software',
        'diversity'
    ]

    useEffect(() => {
        renderJobData();
    }, [])

    const renderJobData = () => {  
        var jobs = [];
       for (var key in data) {
         data[key].map(job => {
            jobs.push(job)
         }) 
        }
        setJob(jobs)
    }    
console.log(data)
    return (
        <StyledJobCtn>
             <StyledResumeDownload href={ResumeFile} download="Samson Mossallam's Resume">
                    Download <DownloadIcon style={{ marginLeft: "5px" }} />
            </StyledResumeDownload>
            {header.map(title => {
                return(
                    <>
                <StyledResumeSectionTitles key={title}>
                        {title}
                 </StyledResumeSectionTitles>
                    <Job job={job}/>        
                    </>
                )
            }
            
            )
            
            }
        </StyledJobCtn>
    )
}

export default Resume