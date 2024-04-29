import {LoaderContainer, LoaderProps} from "./style";

function Loader({loading}: LoaderProps) {
    return (
        <LoaderContainer loading={loading}></LoaderContainer>
    )
}

export default Loader;
