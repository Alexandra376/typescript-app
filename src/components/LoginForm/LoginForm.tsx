import "./style.css";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {InputContainerStyle, LoginFormNameStyle, LoginFormStyle} from "./style";

function LoginForm() {
    return (
        <LoginFormStyle>
            <LoginFormNameStyle>Login form</LoginFormNameStyle>
            <InputContainerStyle>
                <Input
                    name="login-email"
                    type="email"
                    placeholder="Enter your email"
                    label="Email"
                />
                <Input
                    name="login-password"
                    type="password"
                    placeholder="Enter your password"
                    label="Password"
                />
            </InputContainerStyle>
            <Button type="submit" name="Login" />
        </LoginFormStyle>
    );
}

export default LoginForm;
