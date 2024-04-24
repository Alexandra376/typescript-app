import "./style.css";
import {AnimalCardProps} from "./types";
function AnimalCard({animalData} :AnimalCardProps) {
    return(
        <div className="animal-card">
            <h2>{animalData.name}</h2>
            <p>{animalData.species}</p>
            <img src={animalData.image} alt="animal"/>
        </div>
    )
}

export default AnimalCard;
