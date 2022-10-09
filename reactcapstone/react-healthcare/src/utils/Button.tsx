export default function Button(props: buttonprop)
{
    return <button type={props.type} className={"btn btn-primary"}
    onClick={props.onClick}
    >{props.children}</button>
} 

interface buttonprop{
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
}

Button.defaultProps = {
    type: "button"
}