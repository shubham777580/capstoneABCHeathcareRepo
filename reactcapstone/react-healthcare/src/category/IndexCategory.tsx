import { Link } from "react-router-dom";

export default function IndexCategory(){
    return(
        <>
        <h3>Medicine Categories</h3>
        <a className="btn btn-primary" href="/category/create">Create Medicine Category</a>
        </>
    )

}