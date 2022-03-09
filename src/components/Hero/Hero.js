import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Carlos Mendoza's Personal Portfolio
      </SectionTitle>
      <SectionText>
        My mission is to make difference in the world, using my knowledge and help people develop personal and proffessional projects, my ambition is to make great change and build awesome apps.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:carlosmendoza1719@gmail.com'}>Contact Me</Button> 
    </LeftSection>
  </Section>
);

export default Hero;