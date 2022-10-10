import { catergoryDTO } from "../category/category.model";
import MedicineForm from "./MedicineForm";

export default function EditMedicine(){
    const nonSelectedCategory : catergoryDTO[] = [{id:2, name:'Sugar meds'}]
    const selectedCategory : catergoryDTO[] = [{id: 1, name:'Gastro meds'}]
    return(
        <>
        <h3>Editing Medicine</h3>
        <MedicineForm model={{title:'sample title', image_med:'sample image', med_description:'sample description'}}
        onSubmit = {values => console.log(values)}
        nonSelectedCategory = {nonSelectedCategory}
        selectedCategory = {selectedCategory}
         />
        </>
    )

}
