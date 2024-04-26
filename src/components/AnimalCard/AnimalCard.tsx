import {AnimalCardProps} from "./types";
import {AnimalCardStyle, AnimalCardTitleStyle, AnimalCardParagraphStyle, AnimalCardImgStyle} from "./style";

function AnimalCard({animalData} :AnimalCardProps) {
    return(
        <AnimalCardStyle>
            <AnimalCardTitleStyle>{animalData.name}</AnimalCardTitleStyle>
            <AnimalCardParagraphStyle>{animalData.species}</AnimalCardParagraphStyle>
            <AnimalCardImgStyle src={animalData.image} alt="animal"/>
        </AnimalCardStyle>
    )
}

export default AnimalCard;
