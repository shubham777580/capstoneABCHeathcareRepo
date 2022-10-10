import { Form, Formik, FormikHelpers } from "formik";
import { medicineCreationDTO } from "./medicine.model";
import * as Yup from 'yup'
import TextField from "../forms/Textfield";
import Button from "../utils/Button";
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import { useState } from "react";
import { catergoryDTO } from "../category/category.model";

export default function MedicineForm(props: movieFormProps) {

    const [selectedCategory, setselectedCategory] = useState(mapToModel(props.selectedCategory));
    const [nonSelectedCategory, setnonSelectedCategory] = useState(mapToModel(props.nonSelectedCategory));
    function mapToModel(items: { id: number, name: string }[]): multipleSelectorModel[] {
        return items.map(item => {
            return { key: item.id, value: item.name }

        })
    }
    return (
        <Formik
            initialValues={props.model}
            onSubmit={(values, actions) => {
                values.categoryIds = selectedCategory.map(item => item.key);
                props.onSubmit(values, actions)
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('This field is required')
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name of Medicine" field="title" />
                    <TextField displayName="Image Url of Medicine" field="image_med" />
                    <TextField displayName="Description of Medicine" field="med_description" />
                    <MultipleSelector
                        displayName="Medicine Category"
                        nonSelected={nonSelectedCategory}
                        selected={selectedCategory}
                        onChange={(selected, nonSelected) => {
                            setselectedCategory(selected);
                            setnonSelectedCategory(nonSelected);
                        }}
                    />

                    <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <a className='btn btn-secondary' href='/medicines/create'>Cancel</a>
                    <a className='btn btn-primary' href='/medicines/create'>After Save, go to Add Medicine Page</a>
                    <a className='btn btn-primary' href='/'>After Save, go to Home Page</a>

                </Form>
            )}
        </Formik>
    )
}

interface movieFormProps {
    model: medicineCreationDTO;
    onSubmit(values: medicineCreationDTO, actions: FormikHelpers<medicineCreationDTO>): void;
    selectedCategory: catergoryDTO[];
    nonSelectedCategory: catergoryDTO[];
}

