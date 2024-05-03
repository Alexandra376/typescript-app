import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {EmployeeFormStyle, InputsContainerStyle} from "./style";
import {useFormik} from "formik";
import {EmployeeFormProps, LOGIN_FIELD_NAMES} from "./types";
import * as Yup from "yup";
import {number} from "yup";

function EmployeeForm() {
    const shema = Yup.object().shape({
        [LOGIN_FIELD_NAMES.NAME]: Yup.string()
            .required('Field email required')
            .min(2, 'Minimum of 2 characters required')
            .max(50, 'Maximum of 50 characters allowed'),
        [LOGIN_FIELD_NAMES.SURNAME]: Yup.string()
            .required('Field surname required')
            .max(15, 'Maximum of 15 characters allowed'),
        [LOGIN_FIELD_NAMES.AGE]: Yup.number()
            .required('Field age required')
            .min(2, 'Minimum of 1 characters required')
            .max(3, 'Maximum of 3 characters allowed'),
        [LOGIN_FIELD_NAMES.POSITION]: Yup.string()
            .required('Field position required')
            .max(30, 'Maximum of 30 characters allowed'),
        [LOGIN_FIELD_NAMES.RULESOFUSAGE]: Yup.boolean()
            .required('Field rulesOfUsage required')
    })
    const formik = useFormik({
        initialValues: {
            [LOGIN_FIELD_NAMES.NAME]: "",
            [LOGIN_FIELD_NAMES.SURNAME]: "",
            [LOGIN_FIELD_NAMES.AGE]: number,
            [LOGIN_FIELD_NAMES.POSITION]: "",
            [LOGIN_FIELD_NAMES.RULESOFUSAGE]: false,
        } as unknown as EmployeeFormProps,
        validationSchema: shema,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return(
        <EmployeeFormStyle onSubmit={formik.handleSubmit}>
            <InputsContainerStyle>
                <Input
                   name={LOGIN_FIELD_NAMES.NAME}
                   type='text'
                   placeholder='Name'
                   label='Name'
                   getValue={formik.handleChange}
                   value={formik.values[LOGIN_FIELD_NAMES.NAME]}
                   error={formik.errors[LOGIN_FIELD_NAMES.NAME]}
                />
                <Input
                    name={LOGIN_FIELD_NAMES.SURNAME}
                    type='text'
                    placeholder='Surname'
                    label='Surname'
                    getValue={formik.handleChange}
                    value={formik.values[LOGIN_FIELD_NAMES.SURNAME]}
                    error={formik.errors[LOGIN_FIELD_NAMES.SURNAME]}
                />
                <Input name={LOGIN_FIELD_NAMES.AGE}
                       type='number'
                       placeholder='Age'
                       label='Age'
                       getValue={formik.handleChange}
                       value={formik.values[LOGIN_FIELD_NAMES.AGE]}
                       error={formik.errors[LOGIN_FIELD_NAMES.AGE]}
                />
                <Input name={LOGIN_FIELD_NAMES.POSITION}
                       type='text'
                       placeholder='Position'
                       label='Position'
                       getValue={formik.handleChange}
                       value={formik.values[LOGIN_FIELD_NAMES.POSITION]}
                       error={formik.errors[LOGIN_FIELD_NAMES.POSITION]}
                />
                <Input name={LOGIN_FIELD_NAMES.RULESOFUSAGE}
                       type='checkbox'
                       placeholder='Rules of usege'
                       label='Rules of usege'
                       getValue={formik.handleChange}
                       isChecked={formik.values[LOGIN_FIELD_NAMES.RULESOFUSAGE]}
                       error={formik.errors[LOGIN_FIELD_NAMES.RULESOFUSAGE]}
                       isRowReverse/>
            </InputsContainerStyle>
            <Button name='Print' type='submit'/>
        </EmployeeFormStyle>
    )
}

export default EmployeeForm;
