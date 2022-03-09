import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>   
          <LinkItem href="tel:3317166734">33 1716 6734</LinkItem>     
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>   
          <LinkItem href="mailto:carlosmendoza1719@gmail.com">carlosmendoza1719@gmail.com</LinkItem>     
        </LinkColumn>
        <LinkColumn>
          <SocialIconsContainer>
            <SocialIcons href="https://github.com/CharlyMendoza7">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/carlosdavidmendoza/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/charlymendoza17/">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
