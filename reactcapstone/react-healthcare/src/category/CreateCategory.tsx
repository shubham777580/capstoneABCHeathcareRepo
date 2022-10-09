import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../utils/Button";
import * as Yup from 'yup';
import TextField from "../forms/Textfield";

export default function CreateCategory(){
    
    return(
        <>
        <h3>Creating Medicine Category</h3>

        <Formik initialValues={{
            name: ''
        }}
        onSubmit={value => {
            //when the form is postef
            console.log(value)
        }}
        validationSchema={Yup.object({
            name: Yup.string().required('This field is required')
        })}
        >
            <Form>
                <TextField field="name" displayName="Name" />

                <Button type='submit'>Save Changes</Button>
                <a className='btn btn-secondary' href='/category'>Cancel</a>
                <a className='btn btn-primary' href='/'>After Save, go to Home</a>
            </Form>
        </Formik>
       
        </>
    )

}
