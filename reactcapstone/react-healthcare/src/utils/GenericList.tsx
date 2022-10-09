import { ReactElement } from "react";

export default function GenericList(props : genericlistprop)
{
    if(!props.list){
        return <>Loading...</>
    }
    else if (props.list.length === 0){
        return<>No medicines to display</>

    }

    else{
        return props.children;

    }
}

interface genericlistprop{
    list : any;
    children: ReactElement;

}