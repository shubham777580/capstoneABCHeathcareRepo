import { useHistory } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateCategory(){
    const history = useHistory();
    return(
        <>
        <h3>Creating Medicine Category</h3>
        <Button onClick={() => {
            //..doing click fn
            history.push('/category');
        }}>Save Changes</Button>
        </>
    )

}
