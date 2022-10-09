import { useParams } from "react-router-dom"

export default function EditCategory(){
    const {id}:any = useParams();
    return(
        <>
        <h3>Editing Medicine Category</h3>
        The id is written in address bar and reflected here as :{id}
        </>
    )

}
