import CategoryForm from "./CategoryForm";


export default function CreateCategory(){
    
    return(
        <>
        <h3>Creating Medicine Category</h3>
        <CategoryForm model={{name:''}} 

        onSubmit={async value => {
            //when form is posted
            await new Promise(r => setTimeout(r,3000));
            console.log(value);
        }}

        />
       
        </>
    )

}
