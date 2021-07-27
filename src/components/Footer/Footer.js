import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLink,
  FooterLinksItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights
} from "./Footer.elements";
import { Button } from "../../globalStyles";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join Out Exclusive Membership to recive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>Won't Spam You Ever.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
            <Button fontBig>Subscribe</Button>
          
        </Form>
      </FooterSubscription>
    
    <FooterLinksContainer>
        <FooterLinksWrapper>
            <FooterLinksItems>
                 <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/sign-up'>how it works</FooterLink>
                <FooterLink to='/sign-up'>Testinomials</FooterLink>
                <FooterLink to='/sign-up'>Investors</FooterLink>
                <FooterLink to='/sign-up'>Careers</FooterLink>
                <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
          
            <FooterLinksItems>
                 <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/sign-up'>how it works</FooterLink>
                <FooterLink to='/sign-up'>Testinomials</FooterLink>
                <FooterLink to='/sign-up'>Investors</FooterLink>
                <FooterLink to='/sign-up'>Careers</FooterLink>
                <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinksItems>
                 <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/sign-up'>how it works</FooterLink>
                <FooterLink to='/sign-up'>Testinomials</FooterLink>
                <FooterLink to='/sign-up'>Investors</FooterLink>
                <FooterLink to='/sign-up'>Careers</FooterLink>
                <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
          
            <FooterLinksItems>
                 <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to='/sign-up'>how it works</FooterLink>
                <FooterLink to='/sign-up'>Testinomials</FooterLink>
                <FooterLink to='/sign-up'>Investors</FooterLink>
                <FooterLink to='/sign-up'>Careers</FooterLink>
                <FooterLink to='/sign-up'>Terms of Service</FooterLink>
            </FooterLinksItems>
        </FooterLinksWrapper>
    </FooterLinksContainer>
    <SocialMedia>
      <SocialMediaWrap>
        <SocialLogo to='/' >
          <SocialIcon/>
          ULTRA
        </SocialLogo>
      <WebsiteRights>
        ULTRA 2020
      </WebsiteRights>
      <SocialIcons>
        <SocialIconLink href='/' target="_blank"
        aria-label="facebook">
        <FaFacebook />
        </SocialIconLink>
        
        <SocialIconLink href='/' target="_blank"
        aria-label="Instagram">
        <FaInstagram />
        </SocialIconLink>

        <SocialIconLink href='/' target="_blank"
        aria-label="Youtube">
        <FaYoutube />
        </SocialIconLink>

        <SocialIconLink href='/' target="_blank"
        aria-label="twitter">
        <FaTwitter />
        </SocialIconLink>

        
      </SocialIcons>
      </SocialMediaWrap>

    </SocialMedia>
    </FooterContainer>

  );
};

export default Footer;
