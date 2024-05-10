import Content from "../Content/Content";
import {SectionComponent, SectionTitle} from './style';

function Section() {
    return (
        <SectionComponent>
            <SectionTitle>Section block</SectionTitle>
            <Content />
        </SectionComponent>
    )
}

export default Section
