import { useEffect, useState } from "react";
import { landingPagedto } from "./medicine.model";
import Medicinelist from "./Medicinelist";

export default function LandingPage(){
     //for delay in rendering
  const [medicines, setMedicines] = useState<landingPagedto>({});
  useEffect(() => {
    const timerId = setTimeout(() => {
      setMedicines({
        testMedicinelist1: [
          {
            id: 1,
            title: 'paracitamol',
            image_med: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Paracetamol-skeletal.svg/220px-Paracetamol-skeletal.svg.png'
          },
          {
            id: 2,
            title: 'medicine 2',
            image_med: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Paracetamol-skeletal.svg/220px-Paracetamol-skeletal.svg.png'

          }
        ],

        testMedicinelist2: [
          {
            id: 3,
            title: 'medicine 3',
            image_med: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Paracetamol-skeletal.svg/220px-Paracetamol-skeletal.svg.png'
          },
          {
            id: 4,
            title: 'medicine 4',
            image_med: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Paracetamol-skeletal.svg/220px-Paracetamol-skeletal.svg.png'

          }
        ]


      })

    }, 1000);

    return () => clearTimeout(timerId);


  });


    return(
        <>
        <h3>List of Medicines 1</h3>
          <div className='container'>
            <Medicinelist medicines={medicines.testMedicinelist1} />
          </div>

          <div className='container'>
            <h3>List of Medicines 2</h3>
            <Medicinelist medicines={medicines.testMedicinelist2} />
          </div>

        </>
    )
}