import React from 'react';
import MainContainer from './components/MainContainer'
import styled from 'styled-components';
import chatApp from 'Assets/images/chat-app.png';
import { GithubIcon } from 'Assets/svgs/svgs';

const StyledCodeCtn = styled.div`
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;   
`
const SinglCodeCtn = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
`
const StyledCodeSectionTitles = styled.h3`
    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeight.bold};
    font-size: ${p => p.theme.fontSizes.medium};
    color: ${p => p.theme.colors.lightGray};
    margin: .5em .5em .5em 0;
    display: flex;
    justify-content: flex-start;
    &:nth-of-type(3) {
        font-size: ${p => p.theme.fontSizes.medium};
    }    
`
const StyledCodeImg = styled.img`
    width: 50%;
    height: auto;
`
const YearCreated = styled.span`
    font-size: ${p => p.theme.fontSizes.tiny};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.taxiYellow};
    padding: 3px;
    border-radius: 5px;
    margin-left: 20px;
    align-self: center;
`
const StyledCodeDetailCtn = styled.div`
`
const StyledCodeSummary = styled.div`

`
const BuiltWith = styled.div`
    color: ${p => p.theme.colors.lightGray};
    font-size: ${p => p.theme.fontSizes.extraSmall};
    letter-spacing: 2px;
`
const StyledButton = styled.button`
    background-color: ${ p => p.theme.colors.taxiYellow };
    border-radius: 5px;
    color: white;
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
    &:hover {
        opacity: ${ p => p.theme.opacity.mainOpacity };
    }
`

const Code = () => (
    <MainContainer>
        <StyledCodeCtn>
            <SinglCodeCtn>
                <StyledCodeImg src={chatApp} alt="Chat App"/>
                <StyledCodeCtn>
                    <StyledCodeSectionTitles>
                        Chat app
                        <YearCreated>2018</YearCreated>
                    </StyledCodeSectionTitles>
                    <StyledCodeSummary>
                        A single-user timeline of posts and messages, which is 
                        responsive and scales to viewport size. 
                    </StyledCodeSummary>
                    <BuiltWith>
                        ReactJS, ES6/JavaScript, Webpack, Express, Styled Components, Material UI
                    </BuiltWith>
                    <StyledButton>Visit <GithubIcon /></StyledButton>
                    <StyledButton>Live Code</StyledButton>
                </StyledCodeCtn>
            </SinglCodeCtn>
        </StyledCodeCtn>
    </MainContainer>
);

export default Code;