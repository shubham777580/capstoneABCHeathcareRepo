import { catergoryDTO } from "../category/category.model";
import MedicineForm from "./MedicineForm";

export default function CreateMedicine(){
    const nonSelectedCategory : catergoryDTO[] = [{id: 1, name:'Gastro meds'}, {id:2, name:'Sugar meds'}]
    return(
        <>
        <h3>Add new / Create Medicine</h3>
        <MedicineForm model={{title:'', image_med:'', med_description:''}}
        onSubmit = {values => console.log(values)} 
        nonSelectedCategory = {nonSelectedCategory}
        selectedCategory = {[]}
        />
        </>
    )

}
