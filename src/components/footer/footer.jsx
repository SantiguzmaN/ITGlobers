import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  FooterLogo,
  FooterLogo2,
  SocialNetworks,
  ColumnWOborder
} from './footerStyles';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { ImInstagram } from 'react-icons/im';


  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <FooterLogo src={`${process.env.PUBLIC_URL}/footer1.jpg`} alt ="logo" /> 
          <Column>
            <FooterLink href="#">PUFI RAIN</FooterLink>
            <FooterLink href="#">PUFI PUFF</FooterLink>
            <FooterLink href="#">PUFI CART</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">CONTACTO</FooterLink>
            <FooterLink href="#">AYUDA</FooterLink>
            <FooterLink href="#">COMO COMPRAR</FooterLink>
            <FooterLink href="#">TERINOS Y CONDICIONES</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">COMPRA 100% SEGURA</FooterLink>
            <FooterLogo2 src={`${process.env.PUBLIC_URL}/footer2.jpg`} alt ="logo" /> 
          </Column>
          <ColumnWOborder>
            <FooterLink href="#">SIGUENOS EN</FooterLink>
          </ColumnWOborder>
          <SocialNetworks>
            <FaFacebookF className="icon" />
            <IoLogoTwitter className="icon" />
            <ImInstagram />
          </SocialNetworks>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
