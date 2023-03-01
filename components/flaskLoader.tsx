import flask from "../public/images/flask.svg";
import Image from "next/image";

export default function FlaskLoader() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Image src={flask} alt="Flask-loading" className=""/>
        </div>
    )
}