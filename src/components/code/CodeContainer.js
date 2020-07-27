import React from 'react';
import styled from 'styled-components';
import { CodeSandBox, CodeText } from 'Components/components';

const SinglCodeCtn = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin-top: 50px;
  border-bottom: 1px solid ${p => p.theme.colors.lightGray};
  padding-bottom: 50px;
`;

const CodeContainer = () => {
  const codeDetails = [
    {
      title: 'Dog Carousel',
      year: '2020',
      summary: 'A photo carousel of dog pictures',
      builtWith: 'HTML CSS JavaScript',
      github: 'https://github.com/samswagbot/dog-photo-carousel',
      codeSandBox:
        'https://codesandbox.io/embed/dog-photo-carousel-xlfbg?fontsize=14&hidenavigation=1&theme=dark',
    },
    {
      title: 'Find Most Frequent Word and Phrase Tool',
      year: '2019',
      summary:
        'A program that finds the most frequent word or phrase based on students test scores.',
      builtWith: 'Built With: ES6/JavaScript, Node.js',
      github: 'https://github.com/samswagbot/find-frequent-word-tool',
      codeSandBox:
        'https://codesandbox.io/embed/find-frequent-word-tool-rfkwu?fontsize=14&hidenavigation=1&theme=dark',
    },
    {
      title: 'Landing Page',
      year: '2020',
      summary: ' A simple landing page',
      builtWith: 'Built With: HTML5, CSS3',
      github: 'https://github.com/samswagbot/landing-page',
      codeSandBox:
        'https://codesandbox.io/embed/landing-page-de0ob?fontsize=14&hidenavigation=1&theme=dark'
    },
  ];

  return (
    <>
      {codeDetails.map(code => (
        <SinglCodeCtn key={code.title}>
          <CodeSandBox src={code.codeSandBox} title={code.title} />
          <CodeText
            year={code.year}
            summary={code.summary}
            title={code.title}
            builtWith={code.builtWith}
            github={code.github}
          />
        </SinglCodeCtn>
      ))}
    </>
  );
};

export default CodeContainer;
