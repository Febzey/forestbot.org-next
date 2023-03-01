import flask from "../../../public/images/flask.svg"
import Image from "next/image"
export default function Loading() {
    return (
        <div className="w-full h-full mx-auto flex relative flex-col gap-5 items-center justify-center">
            <Image src={flask} alt="flask-loading-icon"/>
            <p className="text-neutral-400 text-sm text-center">Brewing up some statistics...</p>
        </div>
    )
  }