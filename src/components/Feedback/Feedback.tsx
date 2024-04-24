import "components/Feedback/style.css";
import Button from "components/Button/Button";
import {IFeedbackProps} from "components/Feedback/types";

function Feedback({countLike, countDislike, clickOnAddLike, clickOnAddDislike, clickOnResetResults} :IFeedbackProps) {
    return (
        <div className="feedback-container">
            <div className="feedback-result-container">
                <div className="like-dislike-container">
                    <Button name="Like" onButtonClick={clickOnAddLike} />
                    <div className="result">{countLike}</div>
                </div>
                <div className="like-dislike-container">
                    <Button name="Dislike" onButtonClick={clickOnAddDislike} />
                    <div className="result">{countDislike}</div>
                </div>
            </div>
            <Button name="Reset Results" onButtonClick={clickOnResetResults} />
        </div>
    );
}

export default Feedback;
