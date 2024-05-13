import {BlockManagementContainer, BlogManagementWrapper} from "./style";
import Button from "components/Button/Button";
import Card from "homeworks/Homework_14/components/Card/Card";
import TextArea from "components/TextArea/TextArea";
import {ChangeEvent, useState, createContext} from "react";
import {CardInfo} from "./types";

export const CardInfoContext = createContext<CardInfo | null>(null);

function BlogManagement() {
    const [cardInfo, setCardInfo] = useState<CardInfo>({
        firstName: 'Bart',
        lastName: 'Simpson',
        postMessage: '',
    });
    const [textAreaState, setTextAreaState] = useState<string>("");

    const handleClick = () => {
        setCardInfo(prevState => {
            return {
                ...prevState,
                postMessage: textAreaState,
            }
        });
    }

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => setTextAreaState(e.target.value);

    return(
        <CardInfoContext.Provider value={cardInfo}>
        <BlogManagementWrapper>
            <BlockManagementContainer>
                <TextArea placeholder="Enter your message" name="comment" label="Enter your message" getValue={handleTextAreaChange}/>
                    <Button type="submit" handlerButton={handleClick} name="Post"></Button>
                    <Card />
            </BlockManagementContainer>
        </BlogManagementWrapper>
        </CardInfoContext.Provider>
    )
}

export default BlogManagement;
