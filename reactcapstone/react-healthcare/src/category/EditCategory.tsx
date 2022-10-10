import { useParams } from "react-router-dom"
import CategoryForm from "./CategoryForm";

export default function EditCategory(){
    const {id} : any = useParams();
    return(
        <>
        <h3>Editing Medicine Category</h3>
        <h4>The id is written in address bar and reflected here as :{id}</h4>

        <CategoryForm model={{name:'Action'}} 

        onSubmit={async value => {
            //when form is posted
            await new Promise(r => setTimeout(r,3000));
            console.log(id);
            console.log(value);
        }}

        />
        </>
    )

}
