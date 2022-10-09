import { medicinedto } from "./medicine.model";
import css from './Individualmedicine.module.css'

export default function Individualmedicine(props : medicinedto){

    const buildLink = () => '/medicines/${props.id}'
    return(
        <div className="{css.div}">
            <a href={buildLink()}>
                <img alt="Medicine Image" src={props.image_med}/>
            </a>

            <p>
                <a href = {buildLink()}>{props.title}</a>
            </p>

        </div>
    )
}