import { medicinedto } from "./medicine.model"
import Individualmedicine from "./Individualmedicine";
import css from './Medicinelist.module.css';
import GenericList from "../utils/GenericList";


export default function Medicinelist(props: medicinelistprop) {
    return <GenericList list={props.medicines}>
        <div className={css.div}>
            {props.medicines?.map(medicine =>
                <Individualmedicine {...medicine} key={medicine.id} />)}

        </div>


    </GenericList>




}

interface medicinelistprop {
    medicines?: medicinedto[];
}