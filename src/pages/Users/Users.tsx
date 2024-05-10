import Button from "components/Button/Button";
import {UserWrapper, UserTitle} from "./style";
import {useNavigate, useLocation} from "react-router-dom";
import {useEffect} from "react";
function Users() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const goToHomePage = () => {
        navigate("/");
    }

    useEffect(() => {
        return()=> {
            console.log('Component users unmounted');
        }
    }, [])
    return(
        <UserWrapper>
            <UserTitle>Users Page</UserTitle>
            <Button name='Go to Home page' handlerButton={goToHomePage}></Button>
        </UserWrapper>
    )
}

export default Users;
