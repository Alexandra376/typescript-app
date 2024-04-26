import "./style.css";
import {UserProps} from "./types";
import {ProfileCardContainerStyle, ProfileImageStyle, ParagraphStyle, ProfileTitleStyle, PropertyName} from "./style";

function ProfileCard() {
    const userData :UserProps = {
        avatar:
            "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
        userName: "John Doe",
        profession: "Web Developer",
        hobbies: ["Reading", "Traveling", "Photography"],
    };

    return (
        <ProfileCardContainerStyle>
            <ProfileImageStyle src={userData.avatar} alt="avatar"/>
            <ProfileTitleStyle>{userData.userName}</ProfileTitleStyle>
            <ParagraphStyle>
                <PropertyName>Profession:</PropertyName> {userData.profession}
            </ParagraphStyle>
            <ParagraphStyle>
                <PropertyName>Hobby:</PropertyName> {userData.hobbies[0]}
            </ParagraphStyle>
        </ProfileCardContainerStyle>
    );
}

export default ProfileCard;
