export default function Button(props: buttonprop)
{
    return <button className={"btn btn-primary"}
    onClick={props.onClick}
    >{props.children}</button>
} 

interface buttonprop{
    children: React.ReactNode;
    onClick(): void;
}