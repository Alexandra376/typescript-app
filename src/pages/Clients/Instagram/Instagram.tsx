import {InstagramContainer, InstagramWrapper, Paragraph, Title, ButtonContainer} from "./style";
import Button from "components/Button/Button";
import {clientsRedirectLocation} from "helpers/helpers";

function Instagram() {
    return(
        <InstagramWrapper>
            <InstagramContainer>
                <Title>Instagram</Title>
                <Paragraph>Instagram is a photo and video sharing social networking service owned by Meta Platforms. It allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location via geographical tagging. Posts can be shared publicly or with preapproved followers. Users can browse other users' content by tags and locations, view trending content, like photos, and follow other users to add their content to a personal feed. A Meta-operated image-centric social media platform, it is available on iOS, Android, Windows 10, and the web. Users can take photos and edit them using built-in filters and other tools, then share them on other social media platforms like Facebook. It supports 32 languages including English, Spanish, French, Korean, and Japanese.</Paragraph>
                <ButtonContainer>
                    <Button name="Back" handlerButton={clientsRedirectLocation}/>
                </ButtonContainer>
            </InstagramContainer>
        </InstagramWrapper>
    )
}

export default Instagram
