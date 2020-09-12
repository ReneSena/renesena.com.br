import React from 'react';

import { Github } from '@styled-icons/boxicons-logos/Github'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'

import * as S from './styled';

const Footer = () => {
    return (
        <S.FooterWrapper>
            <ul>
                <li>
                    <a href="https://github.com/ReneSena">
                        <Github className="icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/sleeperU_U">
                        <Twitter className="icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/rene_sena">
                        <Instagram className="icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://br.linkedin.com/in/rene-sena">
                        <Linkedin className="icon"/>
                    </a>
                </li>
            </ul>

            Copyright © 2020 Rene Sena | Feito com Gatsby &hearts;
        </S.FooterWrapper>
    );
} 

export default Footer;