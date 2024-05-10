import {ClientsWrapper, SocialMediaContainer, Link, FacebookLogo, VkLogo, InstagramLogo} from "./style";

function Clients() {
    return(
        <ClientsWrapper>
            <SocialMediaContainer>
                <Link href="/clients/facebook">
                    <FacebookLogo />
                </Link>
                <Link href="/clients/instagram">
                    <InstagramLogo/>
                </Link>
                <Link href="/clients/vkontakte">
                    <VkLogo/>
                </Link>
            </SocialMediaContainer>
        </ClientsWrapper>
    )
}

export default Clients;
