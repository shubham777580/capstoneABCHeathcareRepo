export default function Button(props: buttonprop)
{
    return <button className={"btn btn-primary"}>{props.children}</button>
} 

interface buttonprop{
    children: React.ReactNode;
}