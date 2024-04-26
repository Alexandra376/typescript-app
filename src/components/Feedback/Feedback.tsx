import "./style.css";
import Button from "components/Button/Button";
import {FeedbackProps} from "./types";
import {FeedbackContainerStyle, FeedbackResultStyle, LikeDislikeStyle, ResultStyle,} from "./style";

function Feedback({countLike, countDislike, clickOnAddLike, clickOnAddDislike, clickOnResetResults} :FeedbackProps) {
    return (
        <FeedbackContainerStyle>
            <FeedbackResultStyle>
                <LikeDislikeStyle>
                    <Button name="Like" onButtonClick={clickOnAddLike} />
                    <ResultStyle>{countLike}</ResultStyle>
                </LikeDislikeStyle>
                <LikeDislikeStyle>
                    <Button name="Dislike" onButtonClick={clickOnAddDislike} />
                    <ResultStyle>{countDislike}</ResultStyle>
                </LikeDislikeStyle>
            </FeedbackResultStyle>
            <Button name="Reset Results" onButtonClick={clickOnResetResults} />
        </FeedbackContainerStyle>
    );
}

export default Feedback;
