import {VkontakteContainer, VkontakteWrapper, Paragraph, Title, ButtonContainer} from "./style";
import Button from "components/Button/Button";
import {clientsRedirectLocation} from "helpers/helpers";

function Vkontakte() {
    return(
        <VkontakteWrapper>
            <VkontakteContainer>
                <Title>Vkontakte</Title>
                <Paragraph>VK is a Russian online social media and social networking service based in Saint Petersburg.
                    It was conceived in 2006 when Pavel Durov, creator of the popular student forum spbgu.ru, met his former classmate Vyacheslav Mirilashvili in St. Petersburg after graduating from the Faculty of Philology at St Petersburg State University. Vyacheslav showed Durov the increasingly popular Facebook, after which the friends decided to create a new Russian social network.</Paragraph>
                <ButtonContainer>
                    <Button name="Back" handlerButton={clientsRedirectLocation}/>
                </ButtonContainer>
            </VkontakteContainer>
        </VkontakteWrapper>
    )
}

export default Vkontakte;
