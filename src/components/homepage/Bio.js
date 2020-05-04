import React from 'react'
import styled from "styled-components";
import { LinkedinIcon } from 'Assets/svgs/svgs';
import { Link } from 'react-router-dom';
import { Anchor } from 'Components/components'
import { 
    ResumeFile,
    CoverLetter
} from 'Assets/documents/documents'

const StyledBioHeader = styled.p`
    display: flex;
    color: ${p => p.theme.colors.taxiYellow};
    font-weight: ${p => p.theme.fontWeight.bold};
    font-size: ${p => p.theme.fontSizes.medium};
    margin-bottom: 0;
`
const BuzzWords = styled.span`
    font-weight: ${p => p.theme.fontWeight.extraBold};
    color: ${p => p.theme.colors.burgundy};
`
const StyledParagraph = styled.p`
    line-height: 30px;
    font-size:  ${p => p.theme.fontSizes.small};
    text-align:  ${p => p.theme.fontAlign.justify};
    font-weight: ${p => p.theme.fontWeight.thin};
        svg {
            fill: ${p => p.theme.colors.burgundy};
            position: relative;
            top: 4px;
            left: 4px;
        }
`
const Bio = () => {
    const linkedin = "https://www.linkedin.com/in/sammossallam/";
    const prideCampaign = 'https://www.instagram.com/p/BygZXYEpu4b/';
    
    return (
        <div>
            <StyledBioHeader>About:</StyledBioHeader>
                <StyledParagraph>
                    I'm currently <BuzzWords>seeking an opportunity for a Front End
                    role</BuzzWords> based in NY, at a company that values diversity & inclusion,
                    fosters collobration and growth, and builds effective products for communities.
                    With my experiance at <BuzzWords>SoulCycle & Goldman
                    Sachs</BuzzWords>, I applied my passion for Front End technologies by contributing
                    to large scale applications. To see more of my previous experiance check out my
                        <Anchor href={ResumeFile} download="Samson Mossallam's Resume.pdf"> resume</Anchor>, 
                        <Anchor href={CoverLetter} download="Samson Mossallam's Cover Letter.pdf"> cover letter </Anchor> or   
                        <Anchor href={linkedin}> <LinkedinIcon/></Anchor>.
                </StyledParagraph>
                <StyledBioHeader>Front End Development:</StyledBioHeader>
                    <StyledParagraph>
                        <BuzzWords>JavaScript </BuzzWords>is my bread and butter and I spend majority of 
                        my time using it. Front End Development is building out the visual components of 
                        a website and as an artist this is what excites me the most. Whether it's using 
                        <BuzzWords> React, TypeScript, HTML, CSS, or Javascript</BuzzWords>, I build fast,
                        interactive websites. I'm driven to build sophisticated user experiences with the 
                        help of my creative problem solving skills as an engineer.
                    </StyledParagraph>
                <StyledBioHeader>Diversity & Inclusion:</StyledBioHeader>
                <StyledParagraph>
                         I lead the conversation on <BuzzWords>queer inclusion</BuzzWords> in the work place, 
                         and always speak to my story as a <BuzzWords>trans person</BuzzWords> to better 
                         build allyship. Whether it's being a developer or a leader, I search to find effective, 
                         creative, and smart solutions. Check out my
                            <Link to="/talks"> talk </Link> or 
                            <Anchor href={prideCampaign} target="_blank"> pride campaign </Anchor> at SoulCycle!
                </StyledParagraph>
                <StyledBioHeader>Before Coding:</StyledBioHeader>   
                    <StyledParagraph>
                        Before coding, most of my life was dedicated to music. Whether it was studing audio 
                        engineering at <BuzzWords>SUNY Purchase Conservatory of Music</BuzzWords>, competing 
                        as a cellist in state-wide competitons or more recently, falling in love with <Link to="/djing">DJing</Link>; 
                        music continues to find a way into my life.
                    </StyledParagraph>                   
        </div>
    )
}

export default Bio;
