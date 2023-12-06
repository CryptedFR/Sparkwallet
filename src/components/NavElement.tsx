import { Link } from "react-router-dom";


export default function NavElement(props: any) {
    return (
        <div className="nav-element">
            <Link title={props.title} to={props.to}>{props.children}</Link>
        </div>
    )
}