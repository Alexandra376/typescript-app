export interface IFeedbackProps {
    countLike: number;
    countDislike: number
    clickOnAddLike: () => void;
    clickOnAddDislike: () => void;
    clickOnResetResults: () => void;
}
