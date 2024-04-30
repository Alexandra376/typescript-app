import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {InputContainerStyle, LoginFormNameStyle, LoginFormComponent} from "./style";
import {useFormik} from "formik";
import React from "react";
import {LoginFormProps} from "./types";

function LoginForm() {
    const formik= useFormik({
        initialValues: {
            email: "",
            password: "",
        } as LoginFormProps,
        onSubmit: (values: LoginFormProps) => {
            console.log(values);
        },
    });
    return (
        <LoginFormComponent onSubmit={formik.handleSubmit}>
            <LoginFormNameStyle>Login form</LoginFormNameStyle>
            <InputContainerStyle>
                <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    label="Email"
                    getValue={formik.handleChange}
                    value={formik.values.email}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    label="Password"
                    getValue={formik.handleChange}
                    value={formik.values.password}
                />
            </InputContainerStyle>
            <Button type="submit" name="Login" />
        </LoginFormComponent>
    );
}

export default LoginForm;
