import flask from "../../public/images/flask.svg"
import Image from "next/image"
export default function Loading() {
    return (
        <div className="w-full h-full absolute flex items-center justify-center">
            <Image src={flask} alt="flask-loading-icon"/>
        </div>
    )
  }