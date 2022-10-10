export default function Button(props: buttonprop)
{
    return <button type={props.type} 
    disabled={props.disabled}
    className={props.className}
    onClick={props.onClick}
    >{props.children}</button>
} 

interface buttonprop{
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    disabled : boolean;
    className: string;
}

Button.defaultProps = {
    type: "button",
    disabled : false,
    className:"btn btn-primary"
}