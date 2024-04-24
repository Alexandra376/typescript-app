import "components/ProfileCard/style.css";
import {IUserProps} from "components/ProfileCard/types";

function ProfileCard() {
    const userData :IUserProps = {
        avatar:
            "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
        userName: "John Doe",
        profession: "Web Developer",
        hobbies: ["Reading", "Traveling", "Photography"],
    };

    return (
        <div className="profile-card-wrapper">
            <img src={userData.avatar} alt="avatar"/>
            <h3>{userData.userName}</h3>
            <p>
                <span className="property-name">Profession:</span> {userData.profession}
            </p>
            <p>
                <span className="property-name">Hobby:</span> {userData.hobbies[0]}
            </p>
        </div>
    );
}

export default ProfileCard;
