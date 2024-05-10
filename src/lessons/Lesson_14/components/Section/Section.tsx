import { MainSection } from "./style";
import {SectionTitle} from "../MainContent/style";
import {ContentComponent} from "../Content/style";

function Section() {
    return(
        <MainSection>
            <SectionTitle>
                <ContentComponent/>
            </SectionTitle>
        </MainSection>
    )
}

export default Section;
