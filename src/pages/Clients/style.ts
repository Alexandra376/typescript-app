import styled from "@emotion/styled";
import {Facebook, Instagram, Vkontakte} from "assets/images";

export const ClientsWrapper = styled.div``

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 20px;
`

export const Link = styled.a`
    display: block;
`

export const FacebookLogo = styled.img`
    width: 40px;
    height: 40px;
`

export const InstagramLogo = styled.img`
    width: 40px;
    height: 40px;
`

export const VkLogo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
`

FacebookLogo.defaultProps = {src: Facebook};
InstagramLogo.defaultProps = {src: Instagram};
VkLogo.defaultProps = {src: Vkontakte};
