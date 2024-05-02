import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {EmployeeFormStyle, InputsContainerStyle} from "./style";
import {useFormik} from "formik";
import {EmployeeFormProps} from "./types";

function EmployeeForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            age: "",
            position: "",
            rulesOfUsage: false,
        } as EmployeeFormProps,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return(
        <EmployeeFormStyle onSubmit={formik.handleSubmit}>
            <InputsContainerStyle>
                <Input name='name' type='text' placeholder='Name' label='Name' getValue={formik.handleChange} value={formik.values.name} />
                <Input name='surname' type='text' placeholder='Surname' label='Surname' getValue={formik.handleChange} value={formik.values.surname} />
                <Input name='age' type='number' placeholder='Age' label='Age' getValue={formik.handleChange} value={formik.values.age} />
                <Input name='position' type='text' placeholder='Position' label='Position' getValue={formik.handleChange} value={formik.values.position} />
                <Input name='rulesOfUsage' type='checkbox' placeholder='Rules of usege' label='Rules of usege' getValue={formik.handleChange} isChecked={formik.values.rulesOfUsage} isRowReverse/>
            </InputsContainerStyle>
            <Button name='Print' type='submit'/>
        </EmployeeFormStyle>
    )
}

export default EmployeeForm;
