import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck, DiReact } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
            <DiReact size="3rem" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#technologies">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/CharlyMendoza7">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/carlosdavidmendoza/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/charlymendoza17/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
