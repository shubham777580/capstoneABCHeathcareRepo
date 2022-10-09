// type definition file
//using for exportin interface

//dto : data transfer objects
//acts as data container
export interface medicinedto{
    id : number;
    title : string;
    image_med : string;
    

}

export interface landingPagedto{
    testMedicinelist1?: medicinedto[];
    testMedicinelist2?: medicinedto[];
}