import {FaceBookWrapper, Paragraph, Title, FaceBookContainer, ButtonContainer} from "./style";
import Button from "components/Button/Button";
import {clientsRedirectLocation} from "helpers/helpers";

function Facebook() {
    return(
        <FaceBookWrapper>
            <FaceBookContainer>
                <Title>Facebook</Title>
                <Paragraph>Facebook, American online social media platform and social network service that is part of the company Meta Platforms. Facebook was founded in 2004 by Mark Zuckerberg, Eduardo Saverin, Dustin Moskovitz, and Chris Hughes, all of whom were students at Harvard University. Facebook became the largest social network in the world, with nearly three billion users as of 2021, and about half that number were using Facebook every day. The company’s headquarters are in Menlo Park, California.</Paragraph>
                <ButtonContainer>
                    <Button name="Back" handlerButton={clientsRedirectLocation}/>
                </ButtonContainer>
            </FaceBookContainer>
        </FaceBookWrapper>
    )
}
export default Facebook;
