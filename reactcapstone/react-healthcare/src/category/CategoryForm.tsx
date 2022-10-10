import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Button from "../utils/Button";
import * as Yup from 'yup';
import TextField from "../forms/Textfield";
import { categoryCreationDTO } from "./category.model";

export default function CategoryForm(props: categoryFormProps){
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required')
            })}
        >
            {/* for data just to go once, after pressing save changes */}
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name" />

                    <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <a className='btn btn-secondary' href='/category'>Cancel</a>
                    <a className='btn btn-primary' href='/category'>After Save, go to Medicine Category Page</a>
                    <a className='btn btn-primary' href='/'>After Save, go to Home Page</a>
                </Form>

            )}

        </Formik>
    )

}

interface categoryFormProps{
    model: categoryCreationDTO;
    onSubmit(values: categoryCreationDTO, action: FormikHelpers<categoryCreationDTO>): void;
}