import {MessageContainer, TextContent} from "./style";
import { useContext } from "react";
import { CardInfoContext } from "../BlogManagement/BlogManagement"

function Message() {
    const post = useContext(CardInfoContext);

    return(
        <MessageContainer>
            <TextContent>{post?.firstName}</TextContent>
            <TextContent>{post?.lastName}</TextContent>
            <TextContent>{post?.postMessage}</TextContent>
        </MessageContainer>
    )
}

export default Message;
