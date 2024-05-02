import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {InputContainerStyle, LoginFormNameStyle, LoginFormComponent} from "./style";
import {useFormik} from "formik";
import React from "react";
import {LOGIN_FIELD_NAMES, LoginFormProps} from "./types";
import * as Yup from "yup";

function LoginForm() {
    const shema = Yup.object().shape({
        [LOGIN_FIELD_NAMES.EMAIL]: Yup.string().required('Field email required'),
        [LOGIN_FIELD_NAMES.PASSWORD]: Yup.string().required('Field password required'),
    })
    const formik= useFormik({
        initialValues: {
            [LOGIN_FIELD_NAMES.EMAIL]: "",
            [LOGIN_FIELD_NAMES.PASSWORD]: "",
        } as LoginFormProps,
        validationSchema: shema,
        validateOnChange: false,
        validateOnMount: false,
        onSubmit: (values: LoginFormProps) => {
            console.log(values);
        },
    });
    return (
        <LoginFormComponent onSubmit={formik.handleSubmit}>
            <LoginFormNameStyle>Login form</LoginFormNameStyle>
            <InputContainerStyle>
                <Input
                    name={LOGIN_FIELD_NAMES.EMAIL}
                    type="email"
                    placeholder="Enter your email"
                    label="Email"
                    getValue={formik.handleChange}
                    value={formik.values[LOGIN_FIELD_NAMES.EMAIL]}
                    error={formik.errors[LOGIN_FIELD_NAMES.EMAIL]}
                />
                <Input
                    name={LOGIN_FIELD_NAMES.PASSWORD}
                    type="password"
                    placeholder="Enter your password"
                    label="Password"
                    getValue={formik.handleChange}
                    value={formik.values[LOGIN_FIELD_NAMES.PASSWORD]}
                    error={formik.errors[LOGIN_FIELD_NAMES.PASSWORD]}
                />
            </InputContainerStyle>
            <Button type="submit" name="Login" />
        </LoginFormComponent>
    );
}

export default LoginForm;
