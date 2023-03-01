'use client';

import { SetStateAction, Dispatch } from "react";
import { FaTimes } from "react-icons/fa";
import InviteInfo from "./InviteInfoSection";

type InviteModalProps = {
    setModal: Dispatch<SetStateAction<boolean>>;
};

const InviteModal = ({ setModal }: InviteModalProps) => {
    return (
        <div className="absolute w-full h-full right-0 top-0">
            <div className="w-full h-full fixed bg-black bg-opacity-90 bottom-0 top-0 flex items-center justify-center z-10">
                <FaTimes onClick={() => setModal(false)} className="cursor-pointer duration-200 hover:text-neutral-400 absolute right-14 top-14 text-white text-5xl" />
                <InviteInfo />
            </div>
        </div>
    )
};

export default InviteModal;