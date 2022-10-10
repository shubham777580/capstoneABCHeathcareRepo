import { generateKeySync } from "crypto";
import { Form, Formik } from "formik";
import { catergoryDTO } from "../category/category.model";
import Button from "../utils/Button";

export default function FilterMedicine(){

    const initialValues: filterMedicineForm = {
        title : ' ',
        categoryId : 0
    }

    const category: catergoryDTO[] = [{id: 1, name:'Gastro Meds'}, {id: 2, name:'Sugar Meds'}, {id: 3, name:'Blood Pressure Meds'}];
    return(
        <>
        <h3>Filter Medicine</h3>
        <Formik initialValues={initialValues}
            onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="row gx-3 align items-center">
                            <div className="col-auto">
                                <input type="text" className="form-control" id='title' placeholder="Title of the movie"
                                {...formikProps.getFieldProps("title")}
                                />

                            </div>

                            <div className="col-auto">
                                <select className="form-select"
                                    {...formikProps.getFieldProps("categoryId")}
                                    >
                                        <option value="0">!!! Choose a Medicine Category !!!</option>
                                        {category.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}                                       
                                        

                                </select>

                            </div>

                            <div className="col-auto">
                                <Button className='btn btn-primary' onClick={() => formikProps.submitForm()}>Fiter</Button>
                                <Button className='btn btn-danger ms-3'
                                onClick={() => formikProps.setValues(initialValues)}
                                >Clear</Button>

                            </div>

                        </div>
                    </Form>
                )}
            
        </Formik>
        </>
    )

}

interface filterMedicineForm{
    title: string;
    categoryId: number;
}