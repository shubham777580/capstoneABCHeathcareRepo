import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { urlCategory } from "../endpoints";


import { catergoryDTO } from "./category.model";

export default function IndexCategory(){

useEffect(() => {
    axios.get(urlCategory).then((response: AxiosResponse<catergoryDTO[]>) =>
    {
        console.log(response.data);
    }
    )

},[])

    return(
        <>
        <h3>Medicine Categories</h3>
        <a className="btn btn-primary" href="/category/create">Create Medicine Category</a>
        </>
    )

}